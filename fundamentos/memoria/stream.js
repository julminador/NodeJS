const fs = require('fs');
const stream = require('stream');
const util = require('util');

//Stream de lectura
// let data = '';
let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');
//Escucha el evento en el que vienen datos
// readableStream.on('data', function(chunk) { //chunk = paquete de datos
//     // console.log(chunk);
//     data += chunk;
// });
//Escucha cuando termina el evento
// readableStream.on('end', function() {
//     console.log(data);
// });

//Stream de escritura
//Escribe en el buffer estandar del sistema
// process.stdout.write('Hola');
// process.stdout.write('Qué');
// process.stdout.write('Tal');

//Stream de transformación
const Transform = stream.Transform;

function Mayus(){
    Transform.call(this);
}
util.inherits(Mayus, Transform);
Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);