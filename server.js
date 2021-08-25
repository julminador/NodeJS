//3.
const express = require('express');
//import express from 'express'; //Sintaxis ES6

//4.
var app = express();

//5.
app.use('/', (req, res) => {
    res.send('Hola');
});

let port = 3000
app.listen(port);
console.log(`La aplicación está escuchando en http://localhost:${port}`);