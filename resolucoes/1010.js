const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

// let[dado1, ...resto] = pegarValores(lines.shift());
// let[dado1, dado2, dado3] = pegarValores(lines.shift());

let[cod, quantidade, valor] = pegarValores(lines.shift());
let[cod1, quant, money] = pegarValores(lines.shift());

let valorFinal = quantidade * valor;
let recebebe = quant * money;
let moneyF = valorFinal + recebebe;

console.log(`VALOR A PAGAR: R$ ${moneyF.toFixed(2)}`);