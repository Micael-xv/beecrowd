const pegarValores = (linha) => linha.split(" ").map((item) => Number(item));
let numLesma, recebe;
let index = 0;

numLesma = Number(lines.shift());
while (numLesma !== 0 ) {
    recebe = 0;

    for (let i = 0; i < numLesma; i++) {
        let vetor = pegarValores(lines[index++]);

        for (let j = 0; j < vetor.length; j++) {
            if (vetor[j] > recebe) {
                recebe = vetor[j];
            }
        }
    }

    if (recebe < 10) {
        console.log(1);
    } 
    else if (recebe >= 10 && recebe < 20) {
        console.log(2);
    } 
    else if (recebe >= 20) {
        console.log(3);
    }
}
