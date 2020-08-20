const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

buttonElement.onclick = addTodo

var todos = JSON.parse(localStorage.getItem("todos_list")) || []

function renderTodos() {

    listElement.innerHTML = ""

    for (todo of todos) {
        const newTodoElement = document.createElement("li")
        var newTodoElementContent = document.createTextNode(todo)
        
        const linkElement = document.createElement("a")

        linkElement.setAttribute("href", "#")

        var pos = todos.indexOf(todo)
        linkElement.setAttribute("onclick", `removeTodo(${pos})`)

        const linkElementContent = document.createTextNode("Excluir")

        linkElement.appendChild(linkElementContent)

        newTodoElement.appendChild(newTodoElementContent)
        newTodoElement.appendChild(linkElement)

        listElement.appendChild(newTodoElement)
    }
    
}

function addTodo() {

    todos.push(inputElement.value + " ")
    inputElement.value = ""

    renderTodos()
    saveToStorage()
}

function removeTodo(pos) {
    todos.splice(pos, 1)

    renderTodos()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem("todos_list", JSON.stringify(todos))
}

renderTodos()