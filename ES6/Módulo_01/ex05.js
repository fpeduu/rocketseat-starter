//5.1
const arr = [1, 2, 3, 4, 5, 6]

const [ x, ...y ] = arr

console.log(x, y)

function sum(...params) {
    return params.reduce((total, next) => total + next)
}

console.log(sum(2, 3))

//5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
}   

const usuario2 = {
    ...usuario,
    nome: 'Gabriel'
}

const usuario3 = {
    ...usuario,
    endereco: {
        ...usuario.endereco,
        cidade: 'Lontras'
    }
}