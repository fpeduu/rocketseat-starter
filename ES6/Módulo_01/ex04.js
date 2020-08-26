//4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
}

const { nome, endereco: { cidade, estado } } = empresa

console.log(nome)
console.log(estado)
console.log(cidade)
   
//4.2
function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
   
console.log(mostraInfo({ nome: 'Diego', idade: 23 }))