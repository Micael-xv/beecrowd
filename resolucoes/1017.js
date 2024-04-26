let tempo = Number(lines.shift());
let velMedia = Number(lines.shift());

let distancia = tempo * velMedia;
let litros = distancia / 12;

console.log(litros.toFixed(3));