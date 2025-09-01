// crie uma função que receba dois numeros e faça uma operação matematica e retorna a operação entre dois numeros 

function operacaoMatematica(num1, num2, operacao) {
    switch (operacao) {
        case 'soma':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Erro: Divisão por zero não é permitida.';
            }
        default:
            return 'Erro: Operação inválida. Use "soma", "subtracao", "multiplicacao" ou "divisao".';
    }
}
console.log(operacaoMatematica(10, 5, 'soma')); // 15
console.log(operacaoMatematica(10, 5, 'subtracao')); // 5
console.log(operacaoMatematica(10, 5, 'multiplicacao')); // 50
console.log(operacaoMatematica(10, 5, 'divisao'));  // 2
console.log(operacaoMatematica(10, 0, 'divisao')); // Erro: Divisão por zero não é permitida.
console.log(operacaoMatematica(10, 5, 'modulo')); // Erro: Operação inválida. Use "soma", "subtracao", "multiplicacao" ou "divisao".

//outra forma de fazer a função com arrow:

function calcular(num1, num2, operacao) {
    const operacoes = {
        soma: (a, b) => a + b,
        subtracao: (a, b) => a - b,
        multiplicacao: (a, b) => a * b,
        divisao: (a, b) => b !== 0 ? a / b : 'Erro: Divisão por zero não é permitida.'
    };

    if (operacoes[operacao]) {
        return operacoes[operacao](num1, num2);
    } else {
        return 'Erro: Operação inválida. Use "soma", "subtracao", "multiplicacao" ou "divisao".';
    }
}

console.log(calcular(10, 5, 'soma')); // 15


//outra opção com if e else if:
function operacao(num1, num2, operacao) {
    if (operacao === 'soma') {
        return num1 + num2;
    } else if (operacao === 'subtracao') {
        return num1 - num2;
    } else if (operacao === 'multiplicacao') {
        return num1 * num2;
    } else if (operacao === 'divisao') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return 'Erro: Divisão por zero não é permitida.';
        }
    } else {
        return 'Erro: Operação inválida. Use "soma", "subtracao", "multiplicacao" ou "divisao".';
    }
}