const calculadora = require('../calculadora');

describe('Operações de Soma', () => {
    test('0 + 0 deve ser 0', () => {
        expect(calculadora.soma(0, 0)).toBe(0);
    });

    test('1 + 2 deve ser 3', () => {
        expect(calculadora.soma(1, 2)).toBe(3);
    });

    test('-1 + 2 deve ser 1', () => {
        expect(calculadora.soma(-1, 2)).toBe(1);
    });

    test('soma números inteiros grandes', () => {
        expect(calculadora.soma(1000000000, 2000000000)).toBe(3000000000);
    });

    test('soma de números decimais grandes', () => {
        expect(calculadora.soma(123456789.987654321, 987654321.123456789)).toBe(1111111111.1111111);
    });
});

describe('Operações de Subtração', () => {
    test('0 - 0 deve ser 0', () => {
        expect(calculadora.subtracao(0, 0)).toBe(0);
    });

    test('5 - 2 deve ser 3', () => {
        expect(calculadora.subtracao(5, 2)).toBe(3);
    });

    test('5 - 6 deve ser -1', () => {
        expect(calculadora.subtracao(5, 6)).toBe(-1);
    });

    test('subtrai números inteiros grandes', () => {
        expect(calculadora.subtracao(5000000000, 2000000000)).toBe(3000000000);
    });

    test('subtração de números decimais grandes', () => {
        expect(calculadora.subtracao(123456789.987654321, 987654321.123456789)).toBe(-864197531.1358025);
    });
});

describe('Operações de Multiplicação', () => {
    test('4 * 3 deve ser 12', () => {
        expect(calculadora.multiplicacao(4, 3)).toBe(12);
    });

    test('multiplica por zero deve ser zero', () => {
        expect(calculadora.multiplicacao(8, 0)).toBe(0);
    });

    test('multiplica números grandes', () => {
        expect(calculadora.multiplicacao(123456789, 987654321)).toBe(121932631112635269);
    });
});

describe('Operações de Divisão', () => {
    test('8 / 2 deve ser 4', () => {
        expect(calculadora.divisao(8, 2)).toBe(4);
    });

    test('10 / 10 deve ser 1', () => {
        expect(calculadora.divisao(10, 10)).toBe(1);
    });

    test('divisão por 1 deve retornar o mesmo número', () => {
        expect(calculadora.divisao(5, 1)).toBe(5);
    });

    test('divisão por números iguais deve ser 1', () => {
        expect(calculadora.divisao(8, 8)).toBe(1);
    });

    test('lança erro ao dividir por zero', () => {
        expect(() => calculadora.divisao(5, 0)).toThrow('Erro: Divisão por zero.');
    });

    test('divisão de números grandes', () => {
        expect(calculadora.divisao(9876543210, 123456789)).toBeCloseTo(80.000000729, 7);
    });
});

describe('Operações Aritméticas Adicionais', () => {
    test('Calcula média de 5 e 7 para ser 6', () => {
        expect(calculadora.media(5, 7)).toBe(6);
    });

    test('Calcula média de 5 e 5 para ser 5', () => {
        expect(calculadora.media(5, 5)).toBe(5);
    });

    test('Calcula resto da divisão de 10 por 3 para ser 1', () => {
        expect(calculadora.restoDivisao(10, 3)).toBe(1);
    });

    test('Lança erro ao tentar dividir por zero no resto', () => {
        expect(() => calculadora.restoDivisao(10, 0)).toThrow('Erro: Divisão por zero.');
    });
});

describe('Operações de Potenciação', () => {
    test('eleva 4 ao cubo para ser 64', () => {
        expect(calculadora.potenciacao(4, 3)).toBe(64);
    });

    test('potencia com base negativa', () => {
        expect(calculadora.potenciacao(-5, 3)).toBe(-125);
    });

    test('potencia com expoente negativo', () => {
        expect(calculadora.potenciacao(10, -1)).toBe(0.1);
    });
});
