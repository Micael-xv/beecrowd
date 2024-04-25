var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

while (lines.length > 1) {
    var numLesmas = parseInt(lines.shift());
    var velocidades = lines.shift().split(' ').map(Number);

    var maxVelocidade = Math.max(...velocidades);
    var nivelVelocidade;

    if (maxVelocidade < 10) {
        nivelVelocidade = 1;
    } else if (maxVelocidade < 20) {
        nivelVelocidade = 2;
    } else {
        nivelVelocidade = 3;
    }

    console.log(nivelVelocidade);
}