const { MongoClient, ObjectId } = require('mongodb');
const {config} = require('../../config');

const USER = encodeURIComponent(config.DB_USER);
const PASSWORD = encodeURIComponent(config.DB_PASSWORD);
const DB_NAME = encodeURIComponent(config.DB_NAME);

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.DB_HOST}:${config.port}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
    constructor(){
        this.client = new MongoClient(MONGO_URI, {useNewUrlParser: true });
        this.db_name = DB_NAME;
    }
    connect(){
        if(MongoLib.connection){
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect( err => {
                    if(err){
                        reject(err);
                    }
                    console.log('conectado');
                    resolve(this.client.db(this.db_name));    
                });
            });
        }
        return MongoLib.connection;
    }
}

module.exports = MongoLib;




const { get } = require("./network");

const list = [];

function addMessage(message) {
    list.push(message);
}

function getMessage() {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    //get
    // update
    // delete
}