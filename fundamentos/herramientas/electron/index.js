const { app, BrowserWindow } = require('electron');

let ventanaPrincipal;

app.on('ready', crearVentana);

function crearVentana(){
    ventanaPrincipal = new BrowserWindow({
        width: 600,
        height: 400,
    });

    ventanaPrincipal.loadFile('index.html');
}