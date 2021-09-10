async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar (nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla ...');
            resolve(nombre);
            // reject('Hay un error');
        }, 1000);
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    });
}

async function main(){
    let nombre = await hola('Julian');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termia el proceso');
}

console.log('Empezamos el proceso');
main();
console.log('Inicia segunda instrucción');