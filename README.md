# C214-L1-PROJETO LABORATORIO
 
Projeto Calculadora Virtual
Visão Geral
O projeto de Calculadora é uma aplicação Node.js que oferece serviços de cálculo matemático através de uma API. A principal proposta é fornecer uma interface acessível e flexível para realizar operações matemáticas básicas, como soma, subtração, multiplicação, divisão, média, resto da divisão e potenciação.

Funcionalidades
Operações Básicas
A API permite realizar operações matemáticas fundamentais, tais como:

Soma: Adição de dois números.
Subtração: Diferença entre dois números.
Multiplicação: Produto de dois números.
Divisão: Quociente de dois números, evitando divisões por zero.
Média: Cálculo da média entre dois números.
Resto da Divisão: O resto ao dividir dois números.
Potenciação: Elevação de um número a uma potência.
Suporte para Números Grandes e Decimais
A calculadora é capaz de lidar com números grandes e decimais, proporcionando precisão em cálculos extensos ou envolvendo casas decimais.

Configuração CORS
A API inclui um middleware que habilita o CORS (Cross-Origin Resource Sharing), permitindo que clientes acessem a API de diferentes origens.

Utilização
A API é acessada por meio de requisições HTTP, utilizando os endpoints específicos para cada operação matemática. Os resultados são retornados no formato JSON, tornando a integração simples e eficiente.

Exemplos de Uso:

Soma:

Endpoint: /soma/:num1/:num2
Exemplo: /soma/5/3 retorna { "resultado": 8 }
Divisão:

Endpoint: /divisao/:num1/:num2
Exemplo: /divisao/6/2 retorna { "resultado": 3 }
Média:

Endpoint: /media/:num1/:num2
Exemplo: /media/4/6 retorna { "resultado": 5 }
Documentação de Execução do Projeto e Instalação do Jest
Este guia fornece instruções sobre como executar o Projeto de Calculadora e instalar o framework de testes Jest.

Executando o Projeto
Siga os passos abaixo para executar o projeto de Calculadora localmente:

Pré-requisitos
Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar a versão mais recente aqui.

Clone o repositório para sua máquina local:

git clone https://github.com/usuário-do-github/C214-L1-PROJETO-LABORATORIO
Navegue até o diretório do projeto:

cd potencial-c214-adventure
Instalando Dependências
Execute o seguinte comando para instalar as dependências do projeto:

cd api
npm install
Iniciando o Servidor
Após a instalação das dependências, inicie o servidor da API:

npm start
O servidor será iniciado em http://localhost:3000.

Testando a API
Abra seu navegador ou utilize uma ferramenta como Postman para testar as diferentes rotas da API. Exemplos:

Soma: http://localhost:3000/soma/5/3
Divisão: http://localhost:3000/divisao/6/2
Média: http://localhost:3000/media/4/6
Instalando o Jest para Testes Unitários
O Projeto de Calculadora utiliza o Jest como framework de testes. Siga as instruções abaixo para instalar o Jest e executar os testes unitários.

Instalando o Jest
Certifique-se de estar no diretório api/ do projeto:

cd api
Instale as dependências na pasta api/:

npm install --no-save
Executando Testes
Certifique-se de estar no diretório /api!! Agora, você pode executar os testes com o seguinte comando:

npm run test
Isso iniciará o Jest, que procurará por arquivos de teste no formato *.test.js no diretório _tests_/.

GitHub Actions - CI/CD
O projeto implementa um sistema de CI/CD utilizando o GitHub Actions para realizar testes unitários nas funções da calculadora. Sempre que há um push na branch master ou uma pull request é aberta para essa branch, o GitHub Actions executa automaticamente os testes para garantir a integridade do código. Isso proporciona um ambiente de desenvolvimento robusto e ajuda a evitar regressões.

Configuração do GitHub Actions para CI/CD
Este tópico detalha a configuração do GitHub Actions para a Integração Contínua (CI) e Entrega Contínua (CD) no projeto Calculadora API. A configuração abaixo automatiza a execução de testes sempre que há um push na branch master ou uma pull request é aberta para a branch master.

Fluxo de Trabalho do GitHub Actions
O GitHub Actions utiliza um arquivo de configuração YAML (.github/workflows/main.yml) para definir o fluxo de trabalho. Este arquivo está localizado na raiz do repositório e contém as instruções para executar as ações desejadas.

name: Node.js CI

on:
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2
    
      - name: Set Up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '14'
    
      - name: Install Dependencies and Run Tests
        run: |
          cd api
          npm install
          npm test
Detalhes do Fluxo de Trabalho
Configuração de Gatilhos (on):

Este fluxo de trabalho é acionado em dois eventos:
push: Quando há um push na branch master.
pull_request: Quando uma pull request é aberta para a branch master.
Configuração do Job (jobs/test):

runs-on: ubuntu-latest: Define o ambiente de execução como Ubuntu.
Passos do Job (steps):

Checkout do Repositório:
Utiliza a ação actions/checkout para fazer o checkout do repositório.
Configuração do Node.js:
Utiliza a ação actions/setup-node para configurar o ambiente Node.js com a versão 14.
Instalação de Dependências e Execução de Testes:
Navega até o diretório api/, instala as dependências com npm install e executa os testes com npm test.
Execução Automática dos Testes
Este fluxo de trabalho garante que os testes automatizados são executados sempre que há uma alteração na branch master. Isso contribui para a detecção precoce de problemas e a manutenção da qualidade do código ao longo do desenvolvimento.

Observações
Certifique-se de que as dependências necessárias para a execução dos testes estejam corretamente definidas no arquivo api/package.json e que a estrutura do projeto seja consistente com as instruções fornecidas neste tópico. Qualquer modificação futura na configuração de testes ou na estrutura do projeto deve ser refletida neste arquivo de documentação.

Documentação: Como executar a api de forma local
Este documento fornece instruções sobre como executar testes para as funções matemáticas implementadas em uma API. As funções incluem operações básicas, como soma, subtração, multiplicação, divisão, média, resto da divisão e potenciação.

Pré-requisitos
Antes de executar os testes, certifique-se de ter as seguintes dependências instaladas:

Node.js: Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em https://nodejs.org/.

NPM (Node Package Manager): O NPM é instalado automaticamente com o Node.js. Certifique-se de ter a versão mais recente.

Código-fonte: Tenha acesso ao código-fonte que contém as funções matemáticas e a configuração da API.

Instalação e Configuração
Clone ou baixe o repositório contendo o código-fonte com as funções matemáticas e a configuração da API Express.

Abra um terminal na pasta do projeto e execute o seguinte comando para instalar as dependências:

npm install --no-save
Certifique-se de que o código-fonte exporta as funções corretamente e configura a API. No seu caso, o arquivo exporta as funções de cálculo.

Execução da API
Abra um terminal na pasta do projeto.

Execute o seguinte comando para iniciar a API:

node app.js
Este comando iniciará o servidor Express, tornando a API disponível no endereço http://localhost:3000.

Mantenha este terminal dedicado à execução da API Express enquanto realiza os testes.

Testes Manuais com o Postman
Abra outro terminal ou utilize uma nova instância do terminal.

Abra o Postman ou a ferramenta de sua escolha.

Faça chamadas para as diferentes rotas da API. Exemplo de URL para a função de soma:

GET http://localhost:3000/soma?num1=2&num2=3
Substitua os valores de num1 e num2 conforme necessário.

Verifique se os resultados retornados estão corretos.

Link do video:https://drive.google.com/file/d/1W8DAYniX9EKLJXhetVT4fsMIjO7FbmX6/view?usp=drive_link
