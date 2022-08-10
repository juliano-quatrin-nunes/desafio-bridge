# Desafio Full Stack - Bridge
O desafio consiste na criação de uma Aplicação Web que permite que o usuário insira um número inteiro k e retorna o número de números inteiros n menores que k, para os quais n e n+1, ou seja, o número e seu sucessor, têm o mesmo número de divisores positivos

## Back-end
Para o desenvolvimento do Back-end da aplicação, utilizei a linguagem de programação Java com o framework Springboot, assim como foi sugerido na descrição do desafio.
O back-end com Spring Boot foi separado em basicamente 4 partes (camadas):
* API: pode ser chamada de Controller, é a camada mais externa, que é acessada pelo Front-end;
* Service: é a camada onde são realizados os cálculos, nesse caso, onde são encontrados e calculados os números n dado um número k;
* DAO: é a camada que lida diretamente com a inserção e remoção de dados, nessa aplicação, possui uma lista com todos os objetos da classe Number criados;
* Model: é onde fica a classe Number, com o "molde" para as informações que são guardadas para cada número requisitado.

Utilizei o ambiente de desenvolvimento Visual Studio Code para rodar a aplicação, por já estar familizado com esse ambiente, para isso, foi necessário instalar algumas extensões.

## Front-end
Já para o Front-end, utilizei Java Script com a biblioteca React, também como foi sugerido. Para a estilização, utilizei CSS sem nenhuma biblioteca extra.
Como ambiente de desenvolvimento para o Front-end, também optei por utilizar o VSCode.

## Outras ferramentas e publicação da aplicação
Para testar a API Rest criada no Back-end, antes de inciar o Front-end, utilizei o programa Postman.

Além disso, a aplicação foi publicada no cloud provider Heroku, e pode ser acessada pelo seguinte link: 
Para que isso fosse possível, foi necessário separar esse repositório em 2 repositórios diferentes, um para o back-end e outro para o front-end. O conteúdo doss 2 repositórios juntos é exatamente o conteúdo desse repositório.

## Diretivas para a execução local:
Para executar o projeto localmente, é preciso inicialmente ter instalado: Java (8 ou superior), Node.js, React.js.

*Obs: instruções dadas com base no SO Ubuntu*

### Para o Back-end
É necessário ter um ambiente de desenvolvimento capaz de rodar uma aplicação em Spring Boot, como o IntelliJ IDEA, por exemplo. No meu caso, utilizei o VSCode com algumas extensões baixadas, são elas: Extension Pack for Java, Maven for Java, Debugger for Java, Project Manager for Java e Spring Initializr Java Support.
Após isso, baixa abir o diretório do projeto no ambiente de desenvolvimento, entrar na pasta "number_web_app" e clicar no botão play que aparecerá em algum lugar, dependendo do ambiente em questão.

### Para o Front-end
Já para o Front-end, com o Node.js, React.js e npm instalados, basta abir o diretório do projeto e em seguida a pasta "number_web_frontend" e executar o comando npm start, do seguinte modo:
```
cd number_web_app
npm start
```
