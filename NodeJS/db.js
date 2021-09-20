const db = require("mongoose");

db.Promise = global.Promise; //Usar promesas para resolver de forma más simple

//'mongodb+srv://db_user_platzinodejs:rNhUxhpuBrjkGYja@cluster0.shxg8.mongodb.net/platzinodejs_db'
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true, //Asegurar compatibilidad con el servidor
    });
    console.log('[db] Conectada con éxito');
}

module.exports = connect;