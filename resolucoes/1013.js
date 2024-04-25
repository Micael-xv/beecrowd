const pegarValores = (linha) => linha.split(" ").map((item) => Number(item));

let [a, b, c] = pegarValores(lines.shift());
let d;

d = (a + b + Math.abs(a - b)) / 2;
d = (d + c + Math.abs(d - c)) / 2;
console.log(`${d} eh o maior`);
