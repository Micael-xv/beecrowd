let linha = Number(lines.shift());
let i;
let soma;
let cont;

while (linha > 0) {
  let perfeito = Number(lines.shift());
  soma = 0;
  cont = 0;

  for(i = 1; i <= perfeito/2; i++) {
    if(perfeito % i == 0){
      soma += i;
      cont++;
    }
  }

  if(soma == perfeito) {
    console.log(`${perfeito} eh perfeito`); 
  }
  else {
    console.log(`${perfeito} nao eh perfeito`);
  }
        
  linha--;
}