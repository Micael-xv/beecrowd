const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));
let [a, b, c] = pegarValores(lines.shift());

let delta = Math.pow(b, 2) - 4 * a * c;
let r1 = (-b + Math.sqrt(delta)) / (2 * a);
let r2 = (-b - Math.sqrt(delta)) / (2 * a);
if (delta >= 0 && a != 0) {
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
} else {
    console.log('Impossivel calcular');
}