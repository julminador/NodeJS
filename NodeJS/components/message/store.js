//conexión a mongodb atlas
const Model = require("./model");

function addMessage(message) {
    const myMessage = new Model(message); //Instancia de clase del modelo
    myMessage.save(); //Añade el mensaje a la base de datos
}

//Funcion asincrona
async function getMessages(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = { user: filterUser };
    }
    const messages = await Model.find(filter);
    return messages;
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id,
    })

    foundMessage.message = message;
    const newMessage = foundMessage.save();
    return newMessage;
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
}