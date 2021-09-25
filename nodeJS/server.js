//import express from 'express'; //Sintaxis ES6
const express = require('express');
const app = express();
const server = require('http').Server(app);
const config = require('./config');

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');

const router = require('./network/routes');

db(config.dbUrl);

app.use(bodyParser.urlencoded({"extended": false}));
app.use(bodyParser.json());

socket.connect(server);

router(app);

//Servir archivos estaticos
app.use(config.publicRoute, express.static('public'));

server.listen(config.port, () => {
    console.log(`La aplicación está escuchando en ${config.host}:${config.port}`);
});