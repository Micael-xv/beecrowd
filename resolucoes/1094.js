let LINES = input.split("\n");
let MAX = LINES.shift();

let qCoelhos = 0;
let qRatos = 0;
let qSapos = 0;
let totalCobaias = 0;

for (let line in LINES) {
  let [quantidade, tipo] = LINES[line].split(" ");

  if (tipo === "C") {
     qCoelhos += Number(quantidade);
  }
  else if (tipo === "R") {
     qRatos += Number(quantidade);
  }
  else if (tipo === "S") {
     qSapos += Number(quantidade);
  }

  totalCobaias += Number(quantidade);
}

let meidaCoelhos = Number((qCoelhos / totalCobaias) * 100).toFixed(2);
let mediaRatos = Number((qRatos / totalCobaias) * 100).toFixed(2);
let mediaSapos = Number((qSapos / totalCobaias) * 100).toFixed(2);

console.log(`Total: ${totalCobaias} cobaias`);
console.log(`Total de coelhos: ${qCoelhos}`);
console.log(`Total de ratos: ${qRatos}`);
console.log(`Total de sapos: ${qSapos}`);
console.log(`Percentual de coelhos: ${meidaCoelhos} %`);
console.log(`Percentual de ratos: ${mediaRatos} %`);
console.log(`Percentual de sapos: ${mediaSapos} %`);