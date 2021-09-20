const express = require('express');
const bodyParser = require('body-parser');
//import express from 'express'; //Sintaxis ES6

const db = require('./db');

// const router = require('./components/message/network')
const router = require('./network/routes');

db('mongodb+srv://db_user_platzinodejs:rNhUxhpuBrjkGYja@cluster0.shxg8.mongodb.net/platzinodejs_db');

var app = express();
app.use(bodyParser.urlencoded({"extended": false}));
app.use(bodyParser.json());

router(app);

//Servir archivos estaticos
app.use('/app', express.static('public'));

let port = 3000
app.listen(port);
console.log(`La aplicación está escuchando en http://localhost:${port}`);