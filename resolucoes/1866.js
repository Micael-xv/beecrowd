let testes = Number(lines.shift());

for (let i = 0; i < testes; i++) {
    let a = Number(lines.shift());
    if (a % 2 == 0) {
        console.log(0);
    } 
    else {
        console.log(1);
    }
}