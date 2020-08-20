const containerElement = document.querySelector("#app")
const buttonElement = document.querySelector("#button")

function generateSquare() {
    const square = document.createElement("div")

    square.style.width = "100px"
    square.style.height = "100px"
    square.style.backgroundColor = "#f00"

    containerElement.appendChild(square)
}

buttonElement.addEventListener("click", () => {
    generateSquare()
})