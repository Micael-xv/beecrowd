var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let pi = 3.14159;
let r = Number(lines.shift());

let recebe = ((4/3) * pi * r*r*r);

console.log(`VOLUME = ${recebe.toFixed(3)}`);