const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));
let testes = Number(lines.shift());

for (let i = 0; i < testes; i++) {
    let [a, b] = pegarValores(lines.shift());
    console.log(a+b);    
}