function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        if (idade >= 18) {
            resolve("Maior que 18")
        } else {
            reject("Menor que 18")
        }
    })
}

setTimeout(() => {
    checaIdade(20)
    .then(resolve => {
        console.log(resolve)
    })
    .catch(error => {
        console.log(error)
    })
}, 2000)