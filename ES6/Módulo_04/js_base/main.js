import api from "./api"

class App {
    constructor () {
        this.repositories = []
        
        this.formElement = document.getElementById("repo-form")
        this.inputElement = document.getElementById("repo-input")
        this.listElement = document.getElementById("repo-list")
        
        this.registerHandlers()
    }

    registerHandlers() {
        this.formElement.onsubmit = event => this.addRepository(event)
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingElement = document.createElement("span")
            loadingElement.appendChild(document.createTextNode("Carregando..."))
            loadingElement.id = "loading"

            loadingElement.style.color = "blue"

            this.formElement.appendChild(loadingElement)
        } else {
            document.getElementById("loading").remove()
        }
    }

    async addRepository(event) {
        event.preventDefault()

        let repoInput = this.inputElement.value

        if (repoInput.length === 0) {
            return
        }

        this.setLoading()
        
        try {
            const response = await api.get(`/repos/${repoInput}`)

            const { name, description, html_url, owner: { avatar_url } } = response.data

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            })

            this.inputElement.value = ""

            this.render()
        } catch (err) {
            alert("Repositório não encontrado. ")
        }

        this.setLoading(false)
    }

    render() {
        this.listElement.innerHTML = ""

        this.repositories.forEach(repo => {
            let imgElement = document.createElement("img")
            imgElement.src = repo.avatar_url

            let titleElement = document.createElement("strong")
            titleElement.appendChild(document.createTextNode(repo.name))

            let descriptionElement = document.createElement("p")
            descriptionElement.appendChild(document.createTextNode(repo.description))

            let linkElement = document.createElement("a")
            linkElement.href = repo.html_url
            linkElement.target = "_blank"
            linkElement.appendChild(document.createTextNode("Acessar"))

            let listItemElement = document.createElement("li")
            listItemElement.appendChild(imgElement)
            listItemElement.appendChild(titleElement)
            listItemElement.appendChild(descriptionElement)
            listItemElement.appendChild(linkElement)

            this.listElement.appendChild(listItemElement)
        })
    }
}

new App()