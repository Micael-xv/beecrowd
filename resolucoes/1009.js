let nome = (lines.shift());
let salario = Number(lines.shift());
let bonus;
let salarioFinal;
let comissao = Number(lines.shift());

bonus = comissao * .15;
salariFinal = salario + bonus;

console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`);