const x = lines.shift();
const y = lines.shift();
const z = lines.shift();
let a;

if (x === 'vertebrado' && y === 'ave' && z === 'carnivoro') {
    a = 'aguia';
}

if (x === 'vertebrado' && y === 'ave' && z === 'onivoro') {
    a = 'pomba';
}

if (x === 'vertebrado' && y === 'mamifero' && z === 'onivoro') {
    a = 'homem';
}

if (x === 'vertebrado' && y === 'mamifero' && z === 'herbivoro') {
    a = 'vaca';
}

if (x === 'invertebrado' && y === 'inseto' && z === 'hematofago') {
    a = 'pulga';
}

if (x === 'invertebrado' && y === 'inseto' && z === 'herbivoro') {
    a = 'lagarta';
}

if (x === 'invertebrado' && y === 'anelideo' && z === 'hematofago') {
    a = 'sanguessuga';
}

if (x === 'invertebrado' && y === 'anelideo' && z === 'onivoro') {
    a = 'minhoca';
}

console.log(a);