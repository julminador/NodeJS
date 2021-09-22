//import express from 'express'; //Sintaxis ES6
const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = 3000;

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');

const router = require('./network/routes');

db('mongodb+srv://db_user_platzinodejs:rNhUxhpuBrjkGYja@cluster0.shxg8.mongodb.net/platzinodejs_db');

app.use(bodyParser.urlencoded({"extended": false}));
app.use(bodyParser.json());

socket.connect(server);

router(app);

//Servir archivos estaticos
app.use('/app', express.static('public'));

server.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});