const calculadora = require('../calculadora');

test('Soma 0 + 0 para ser 0', () => {
    expect(calculadora.soma(0, 0)).toBe(0);
});

test('Soma 1 + 2 para ser 3', () => {
    expect(calculadora.soma(1, 2)).toBe(3);
});

test('Soma -1 + 2 para ser 1', () => {
    expect(calculadora.soma(-1, 2)).toBe(1);
});

test('subtrai 0 - 0 para ser 0', () => {
    expect(calculadora.subtracao(0, 0)).toBe(0);
});

test('subtrai 5 - 2 para ser 3', () => {
    expect(calculadora.subtracao(5, 2)).toBe(3);
});

test('subtrai 5 - 6 para ser -1', () => {
    expect(calculadora.subtracao(5, 6)).toBe(-1);
});

test('multiplica 4 * 3 para ser 12', () => {
    expect(calculadora.multiplicacao(4, 3)).toBe(12);
});

test('divide 8 / 2 para ser 4', () => {
    expect(calculadora.divisao(8, 2)).toBe(4);
});

test('divide 10 / 10 para ser 1', () => {
    expect(calculadora.divisao(10, 10)).toBe(1);
});

test('lança erro ao dividir por zero', () => {
    expect(() => calculadora.divisao(5, 0)).toThrow('Erro: Divisão por zero.');
});

test('soma números inteiros grandes', () => {
    expect(calculadora.soma(1000000000, 2000000000)).toBe(3000000000);
});

test('subtrai números inteiros grandes', () => {
    expect(calculadora.subtracao(5000000000, 2000000000)).toBe(3000000000);
});

test('multiplica por zero deve ser zero', () => {
    expect(calculadora.multiplicacao(8, 0)).toBe(0);
});

test('divisão por um deve retornar o mesmo número', () => {
    expect(calculadora.divisao(5, 1)).toBe(5);
});

test('divisão por números iguais deve ser 1', () => {
    expect(calculadora.divisao(8, 8)).toBe(1);
});

test('lança erro ao tentar dividir por zero', () => {
    expect(() => calculadora.divisao(10, 0)).toThrow('Erro: Divisão por zero.');
});

test('soma de números decimais grandes', () => {
    expect(calculadora.soma(123456789.987654321, 987654321.123456789)).toBe(1111111111.1111111);
});

test('subtração de números decimais grandes', () => {
    expect(calculadora.subtracao(123456789.987654321, 987654321.123456789)).toBe(-864197531.1358025);
});

test('multiplica números grandes', () => {
    expect(calculadora.multiplicacao(123456789, 987654321)).toBe(121932631112635269);
});

test('divisão de números grandes', () => {
    expect(calculadora.divisao(9876543210, 123456789)).toBe(80.000000729);
});

test('Calcula média de 5 e 7 para ser 6', () => {
    expect(calculadora.media(5, 7)).toBe(6);
});

test('Calcula média de 5 e 5 para ser 5', () => {
    expect(calculadora.media(5, 5)).toBe(5);
});


test('Calcula resto da divisão de 10 por 3 para ser 1', () => {
    expect(calculadora.restoDivisao(10, 3)).toBe(1);
});

test('Lança erro ao tentar dividir por zero', () => {
    expect(() => calculadora.restoDivisao(10, 0)).toThrow('Erro: Divisão por zero.');
});

test('eleva 4 ao cubo para ser 64', () => {
    expect(calculadora.potenciacao(4, 3)).toBe(64);
});

test('potencia com base negativa', () => {
    expect(calculadora.potenciacao(-5, 3)).toBe(-125);
});

test('potencia com expoente negativo', () => {
    expect(calculadora.potenciacao(10, -1)).toBe(0.1);
});
