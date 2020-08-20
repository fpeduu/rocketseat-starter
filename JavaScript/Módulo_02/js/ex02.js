const containerElement = document.querySelector("#app")
const buttonElement = document.querySelector("#button")
        
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function generateSquare() {
    const square = document.createElement("div")
    square.setAttribute("class", "square")

    square.style.width = "100px"
    square.style.height = "100px"
    square.style.backgroundColor = "#f00"

    square.onmouseover = () => {
        square.style.backgroundColor = getRandomColor()
    }

    containerElement.appendChild(square)
}

buttonElement.addEventListener("click", () => {
    generateSquare()
})