const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//A travez de un objeto definimos propiedates y tipos
const mySchema = new Schema({
    user: String,
    message: { //En un objeto para definir el mensaje
        type: String,
        require: true, //Siempre debe venir el mensaje
    },
    date: Date,
});

/*Todo lo que se crea se guarda con este nombre
y modelo de Schema*/
const model = mongoose.model('Message', mySchema);
module.exports = model;