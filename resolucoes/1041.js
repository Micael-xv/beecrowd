const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [x, y] = pegarValores(lines.shift());

if (x == 0 && y == 0) {
    console.log('Origem');
} 
else if (x > 0 && y > 0) {
    console.log('Q1');
} 
else if (x < 0 && y > 0) {
    console.log('Q2');
}
else if (x < 0 && y < 0) {
    console.log('Q3');
}
else if (x > 0 && y < 0) {
    console.log('Q4');
}
else if (x == 0 && y != 0) {
    console.log('Eixo Y');
}
else if (x != 0 && y == 0) {
    console.log('Eixo X');
}