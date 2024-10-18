const express = require('express');
const calculadora = require('./calculadora');
const app = express();
const port = 3000;

// Middleware para habilitar o CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Calculadora!');
});

// Rota para soma
app.get('/soma/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    const resultado = calculadora.soma(num1, num2);
    res.json({ resultado });
});

// Rota para subtração
app.get('/subtracao/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    const resultado = calculadora.subtracao(num1, num2);
    res.json({ resultado });
});

// Rota para multiplicação
app.get('/multiplicacao/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    const resultado = calculadora.multiplicacao(num1, num2);
    res.json({ resultado });
});

// Rota para divisão
app.get('/divisao/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    try {
        const resultado = calculadora.divisao(num1, num2);
        res.json({ resultado });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

// Rota para resto da divisão
app.get('/restoDivisao/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    try {
        const resultado = calculadora.restoDivisao(num1, num2);
        res.json({ resultado });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

// Rota para calcular a Média
app.get('/media/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    try {
        const resultado = calculadora.media(num1, num2);
        res.json({ resultado });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

// Rota para potenciação
app.get('/potenciacao/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    const resultado = calculadora.potenciacao(num1, num2);
    res.json({ resultado });
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});


