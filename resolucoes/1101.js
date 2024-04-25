const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [a, b] = pegarValores(lines.shift());

while (a > 0 && b > 0) {
    let numeros = [];

    if (a > b) {
        for (let i = b; i <= a; i++) {
            numeros.push(i);
        }
    } else {
        for (let i = a; i <= b; i++) {
            numeros.push(i);
        }
    }

    let soma = numeros.reduce((acc, curr) => acc + curr, 0);
    
    console.log(numeros.join(' ') + ' Sum=' + soma);
    
    [a, b] = pegarValores(lines.shift());
}
