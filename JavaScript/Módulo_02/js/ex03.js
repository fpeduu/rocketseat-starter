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