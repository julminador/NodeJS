const moment = require('moment');

let ahora = moment();
// console.log(ahora.toString());
// console.log(ahora.format('YYYY-MM-DD'));
console.log(ahora.subtract(7, 'days')); // Para restar días