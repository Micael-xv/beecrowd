let testes = Number(lines.shift());

function imprimirHo(quantidade) {
    let resultado = '';
    for (let i = 0; i < quantidade; i++) {
        resultado += 'Ho ';
    }
    console.log(resultado.trim() + '!');
}

imprimirHo(testes);