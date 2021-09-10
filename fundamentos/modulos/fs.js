const fs = require('fs');
function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        console.info(data.toString());
    });
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error('No he podido escribirlo', err)
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

leer(__dirname + '/archivo.txt');
// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo');