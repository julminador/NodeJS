const express = require('express');
const bodyParser = require('body-parser');
//import express from 'express'; //Sintaxis ES6
const router = express.Router();
const response = require('./network/response');

var app = express();
app.use(bodyParser.urlencoded({"extended": false}));
app.use(bodyParser.json());
app.use(router);

router.get('/message', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    });
    // res.send('Lista de mensajes');
    response.success(req, res, 'Lista de mensajes');
});

router.post('/message', (req, res) => {
    //res.send('Mensaje añadido');
    console.log(req.body);
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error simulado', 400);
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
    // res.status(201).send({error: '', body: 'Creado correctamente'});
});

router.delete('/message', function (req, res) {
    // console.log(req.query);
    console.log(req.body);
    res.send('Mensaje '+ req.body.text +' eliminado correctamente');

});

// app.use('/', (req, res) => {
//     res.send('Hola');
// });

let port = 3000
app.listen(port);
console.log(`La aplicación está escuchando en http://localhost:${port}`);