# Test Fullstack API

API para consulta, cadastro, edição e exclusão de usuários.

Desenvolvido em NodeJS com Express, e banco de dados em JSON.

Testes unitários.

## Configurando Ambientes

### Download e Instalação 
Baixar e instalar
1.  <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code> [NodeJS - Versão LTS](https://nodejs.org/pt-br/download/)
2.  <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png"></code> [Docker Desktop](https://www.docker.com/products/docker-desktop)
--------------------------------------------------------------------------

### Execute no terminal 
1.  ```git clone https://github.com/brunosribeiroo/test-FullstackJSJunior.git```
2.  ```cd server```
3.  ```npm install```
--------------------------------------------------------------------------
## Configurando Docker
Execute no terminal ./server
1. ```docker-compose up --build```
--------------------------------------------------------------------------

## Testes e Documentação
[Swagger](http://localhost:3000/doc)
#### http://localhost:3000/doc
--------------------------------------------------------------------------
## Testes
1.  ```npm test```

Para testar os arquivos individualmente
1.  ```npm test -- ${nomeDoArquivo}```

--------------------------------------------------------------------------
## Estrutura de Pastas
```
server
    ├───config
    ├───controllers
    ├───db
    ├───helpers
    ├───models
    ├───repository
    ├───routes
    └───test
        ├───helpers
        ├───models
        └───repository
```

