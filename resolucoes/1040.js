const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [n1, n2, n3, n4] = pegarValores(lines.shift());
let rec;
let media = ((n1 * 2 + n2 * 3 + n3 * 4 + n4) / 10);

console.log(`Media: ${media.toFixed(1)}`);
if (media >= 7) {
  console.log('Aluno aprovado.');
} else if (media < 5) {
  console.log('Aluno reprovado.');
} else {
  console.log('Aluno em exame.');
  rec = Number(lines.shift());
  console.log(`Nota do exame: ${rec.toFixed(1)}`);
  let medFinal = (rec + media) / 2.0;
  if (medFinal >= 5.0) {
    console.log('Aluno aprovado.');
  } else {
    console.log('Aluno reprovado.');
  }
  console.log(`Media final: ${medFinal.toFixed(1)}`);
}