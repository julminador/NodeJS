const statusMessages = {
    '200': 'Completado',
    '201': 'Creado',
    '400': 'Formato inválido',
    '500': 'Error interno',
}

exports.success = function (req, res, message, status) {
    let statusCode = status;
    let statusMessage = message;
    if (!status) {
        status = 200;
    }
    if (!message) {
        statusMessage = statusMessages[status];
    }
    res.status(statusCode).send({
        error: '',
        body: statusMessage,
    });
}

exports.error = function (req, res, message, status, details) {
    let statusCode = status;
    let statusMessage = message;
    if (!status) {
        status = 500;
    }
    if (!message) {
        statusMessage = statusMessages[status];
    }
    console.error('[respone error] ' + details);
    res.status(statusCode).send({
        error: statusMessage,
        body: ''
    });
}