console.time('todo');
let suma = 0;
console.time('bucle');
for (let i = 0; i < 10000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle2');
for (let j = 0; j < 10000000; j++) {
    suma2 += 1;
}

console.time('asincrono');
console.log('Empiesa el proceso asincrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrono')
    });

function asincrona(){
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log('Termina mi función asincrona');
            resolve;
        });
    });
}

console.timeEnd('bucle2');
console.timeEnd('todo');