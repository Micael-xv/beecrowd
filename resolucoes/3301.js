const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [h, z, l] = pegarValores(lines.shift());

if((h > z && z>l) || h<z && z<l) {
   console.log("zezinho");
}
else if((z > h && h >l) || (z < h && h <l)) {
   console.log("huguinho");
}
else {
   console.log("luisinho");
}