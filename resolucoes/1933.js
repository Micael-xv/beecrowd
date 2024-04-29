const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [x, y] = pegarValores(lines.shift());

if (x < y) {
  console.log(y);  
}
else {
  console.log(x);
}