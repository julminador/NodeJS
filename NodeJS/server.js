const express = require('express');
const bodyParser = require('body-parser');
//import express from 'express'; //Sintaxis ES6
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/message', (req, res) => {
    res.send('Lista de mensajes');
});

router.post('/message', (req, res) => {
    res.send('Mensaje añadido');
});

router.delete('/message', function (req, res) {
    console.log(req.body);
    res.send('Mensaje añadido correctamente');
});

// app.use('/', (req, res) => {
//     res.send('Hola');
// });

let port = 3000
app.listen(port);
console.log(`La aplicación está escuchando en http://localhost:${port}`);