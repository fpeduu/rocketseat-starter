# Api NodeJS Rocketseat

## Api para gerenciamento de produtos para uma loja virtual, feita no curso de NodeJS da Rocketseat
<h6 align="center"><a href="https://app.rocketseat.com.br/node/curso-node-js">Curso<a><h6>

<p align="center">
 <a href="#api">API</a> •
 <a href="#tecnologias">Tecnologias</a>
</p>

<span id="api"></span>

## API

### Objetivo do projeto

Montar uma aplicação que permita a checagem e alteração dos dados de uma lista de produtos, por meio dos métodos *GET*, *POST*, *PUT* e *DELETE*.

### Features
###### Obs.: Algumas das imagens apresentadas foram capturadas no  _Insomnia Core_ (Testador utilizado na API)

#### Listagem dos produtos

Acessada por meio da *url_base* (localhost:5000) + */products*, permite a visualização de todos os produtos cadastrados. Tal visualização foi paginada por meio do módulo "mongoose-paginate", dividindo-a em páginas de 10 produtos, cada.

###### Lista de produtos (GET "/products")
![]()

A página base é a primeira, mas pode-se ter acesso as outras por meio da *url de listagem* + "?page=numeroDaPagina".

###### Página 2 da lista de produtos (GET "/products?page=2")
![]()

#### Pesquisa por um produto específico (Via ID)

Pode ser acessada por meio da *url de listagem* (url_base + /products) + /*id do produto* (Pode ser visualizado na listagem dos produtos) e exibe os dados de um produto específico.

###### Visualização do produto "Blacklist" (GET "/products/5f490776e14afb37d82eca32")
![]()

#### Criação de novos produtos

Feita por meio do método *POST*, deve enviar um corpo em *JSON* com os dados para a criação de um novo produto. Retorna os dados do produto criado.

Criação:

###### Criando produto (POST "/products" + JSON body)
![]()

Resultado:

###### Resultado da criação de produto
![]()

#### Alteração dos dados de um produto (Feita via ID)

Com o método *PUT*, acompanha o id do produto na url e carrega consigo um corpo JSON com os dados do produto a serem alterados.

Alteração:

###### Alterando descrição do produto criado (PUT "/products/5f494b737d00852ca48c6e0d" + JSON body)
![]()

Resultado:

###### Resultado da alteração de descrição
![]()

#### Deleção de produto (Feita via ID)

Usa o método *DELETE* e apaga o produto cujo id acompanha a url. Apenas retorna que obteve sucesso (Código 200).

###### Deletando o produto criado (DELETE "/products/5f494b737d00852ca48c6e0d")
![]()

###### Resultado da deleção
![]()

<span id="tecnologias"></span>

## Tecnologias Utilizadas

- [NodeJS](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)
- [Insomnia Core](https://insomnia.rest/)