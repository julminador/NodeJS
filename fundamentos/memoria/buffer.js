// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1, 2, 4]);
let buffer = Buffer.from('Hola');

// console.log(buffer);
// console.log(buffer.toString());

//Guardar alfabeto
let abc = Buffer.alloc(26);
for (let i =0; i < 26; i++){
    abc[i] = i + 97; // 97 hace referencia al cáracter ASCII
}
console.log(abc);
console.log(abc.toString());