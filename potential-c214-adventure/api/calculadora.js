function soma(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtracao(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}

function multiplicacao(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

function divisao(num1, num2) {
    if (num2 !== 0) {
        return parseFloat(num1) / parseFloat(num2);
    } else {
        throw new Error('Erro: Divisão por zero.');
    }
}

// Função para calcular a média entre dois números
function media(num1, num2) {
    return (parseFloat(num1) + parseFloat(num2)) / 2;
}

// Função para calcular o resto da divisão entre num1 e num2
function restoDivisao(num1, num2) {
    if (num2 !== 0) {
        return parseFloat(num1) % parseFloat(num2);
    } else {
        throw new Error('Erro: Divisão por zero.');
    }
}

function potenciacao(num1, num2){
    return Math.pow(num1, num2)
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    media,
    restoDivisao,
    potenciacao,
};
