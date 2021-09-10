//Variables de entorno
let nombre = process.env.NOMBRE || 'sin nombre'; //env = environment
let web = process.env.WEB || 'no tengo web'; // || para cargar por defecto

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);