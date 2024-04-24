var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (linha) => linha.split(" ").map((item) => Number(item));

let index = 0;

while (true) {
    let numLesma = pegarValores(Number(lines.shift()));
    if (numLesma === 0) break;

    let maxSpeed = 0;
    for (let i = 0; i < numLesma; i++) {
        const speeds = pegarValores(lines[index++]);
        const maxSpeedInRace = Math.max(...speeds);
        if (maxSpeedInRace > maxSpeed) {
            maxSpeed = maxSpeedInRace;
        }
    }

    if (maxSpeed < 10) {
        console.log(1);
    } else if (maxSpeed < 20) {
        console.log(2);
    } else {
        console.log(3);
    } 
}
