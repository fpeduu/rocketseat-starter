const nomes = ["Diego", "Gabriel", "Lucas"]

const containerElement = document.querySelector("#app")
const listElement = document.createElement("ul")

nomes.forEach(nome => {
    const listNameElement = document.createElement("li")
    var listNameElementContent = document.createTextNode(nome)
    
    listNameElement.appendChild(listNameElementContent)
    listElement.appendChild(listNameElement)
})

containerElement.appendChild(listElement)

function adicionar() {
    const inputElement = document.querySelector("input[name=nome]")

    var newNameElement = document.createElement("li")
    var newNameElementContent = document.createTextNode(inputElement.value)
    newNameElement.appendChild(newNameElementContent)

    listElement.appendChild(newNameElement)
}