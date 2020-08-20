# Exercícios JS Rocketseat

## Exercícios feitos no curso de JS da Rocketseat
## <https://app.rocketseat.com.br/node/curso-java-script>

Exercícios feitos
=================

<!--ts-->
    * [Módulo 1](#mod1)
        * [Exercício 1](#mod1-ex1)
        * [Exercício 2](#mod1-ex2)
        * [Exercício 3](#mod1-ex3)
        * [Exercício 4](#mod1-ex4)
        * [Exercício 5](#mod1-ex5)
    * [Módulo 2(#mod2)]
        * [Exercício 1](#mod2-ex1)
        * [Exercício 2](#mod2-ex2)
        * [Exercício 3](#mod2-ex3)
        * [Exercício 4](#mod2-ex4)
    * [Módulo 3(#mod3)]
        * [Aplicação To-Do's](#mod3-appTodo)
    * [Módulo 4(#mod4)]
        * [Exercício 1](#mod4-ex1)    
        * [Exercício 2](#mod4-ex2)    
        * [Exercício 3](#mod4-ex3)    
        * [Exercício 3 alterado](#mod4-ex3-alterado)
<!--te-->

<a name="mod1">

## Módulo 1

<a name="mod1-ex1">

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

<a name="mod1-ex2">

### Exercício 2

Crie uma função que dado um intervalo (entre x e y) exiba todos os número pares:

```
function pares(x, y) {
 // código aqui
}
pares(32, 321);
```

<a name="mod1-ex3">

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

<a name="mod1-ex4">

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

<a name="mod1-ex5">

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