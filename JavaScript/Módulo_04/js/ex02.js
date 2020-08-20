const containerElement = document.querySelector("#app")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")
const listElement = document.querySelector("#app ul")

function renderRepositories(repositories) {
    repositories.forEach(repo => {
        const newLiElement = document.createElement("li")
        var newLiElementContent = document.createTextNode(repo.name)

        newLiElement.appendChild(newLiElementContent)
        listElement.appendChild(newLiElement)
    })
}

function userQuery() {
    var username = inputElement.value

    listElement.innerHTML = ""
    inputElement.value = ""

    return axios.get("https://api.github.com/users/" + username + "/repos")
    .then(response => {
        listElement.innerHTML = ""
        renderRepositories(response.data)        
    })
    .catch(error => {
        listElement.innerHTML = ""
        
        console.warn(error)
    })
}