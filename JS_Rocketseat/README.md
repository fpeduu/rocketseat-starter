# Exercícios JS Rocketseat

## Exercícios feitos no curso de JS da Rocketseat
<h6 align="center"><a href="https://app.rocketseat.com.br/node/curso-java-script">Curso<a><h6>

<p align="center">
 <a href="#modulo1">Módulo 1</a> •
 <a href="#modulo2">Módulo 2</a> • 
 <a href="#modulo3">Módulo 3</a> • 
 <a href="#modulo4">Módulo 4</a> 
</p>

<span id="modulo1"><span>

## Módulo 1

### Exercício 1

Crie uma função que dado o objeto a seguir:

```
var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
};
```

Retorne o seguinte conteúdo:

```
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
```

### Exercício 2

Crie uma função que dado um intervalo (entre x e y) exiba todos os número pares:

```
function pares(x, y) {
 // código aqui
}
pares(32, 321);
```

### Exercício 3

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.

```
function temHabilidade(skills) {
 // código aqui
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
```

###### *Dica: para verificar se um vetor contém um valor, utilize o método indexOf()*

### Exercício 4

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

```
function experiencia(anos) {
 // código aqui
}

var anosEstudo = 7;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
```

### Exercício 5

Dado o seguinte vetor de objetos:

```
var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];
```

Escreva uma função que produza o seguinte resultado:

```
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
```

###### *Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array com um separador utilize o join.*

<span id="modulo2"><span>

## Módulo 2

### Exercício 1

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.

### Exercício 2

Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

```
function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}

var newColor = getRandomColor(); // #E943F0
```

### Exercício 3

A partir do seguinte vetor:
var nomes = ["Diego", "Gabriel", "Lucas"];
Preencha uma lista (<h6>*<ul>*<h6>) no HTML com os itens da seguinte forma:

● Diego
● Gabriel
● Lucas