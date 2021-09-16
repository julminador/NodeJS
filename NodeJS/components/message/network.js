const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
    controller.getMesseges()
        .then((messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error ', 500, e)
        })
});

router.post('/', (req, res) => {

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Información invalida', 400, 'Error en el controlador');
        });

});

router.delete('/', function (req, res) {
    console.log(req.body);
    res.send('Mensaje '+ req.body.text +' eliminado correctamente');

});

module.exports = router;