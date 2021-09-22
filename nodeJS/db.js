const db = require("mongoose");

db.Promise = global.Promise; //Usar promesas para resolver de forma más simple

async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true, //Asegurar compatibilidad con el servidor
    });
    console.log('[db] Conectada con éxito');
}

module.exports = connect;