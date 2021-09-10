function otraFuncion() {
    return seRompe();
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch(err) {
            console.error('Error en mi función asincrona');
            cb(err);
        }
    }), 1000;
}

try {
    // seRompe();
    seRompeAsincrona(err => console.log('Hay error'));
} catch(err) {
    console.error('Vaya algo se ha roto');
    // console.error(err);
    console.error(err.message);
}

console.log('Esto está al final');