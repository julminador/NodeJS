const { exec, spawn } = require('child_process');

// exec('ls -la', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

let proceso = spawn('ls', ['-la']);
console.log(process.pid);
console.log(process.connected);

proceso.stdout.on('data', dato => {
    console.log('¿Está muerto?')
    console.log(process.killed)
    console.log(dato.toString())
});

proceso.on('exit', () => {
    console.log('El proceso terminó')
    console.log(proceso.killed);
});