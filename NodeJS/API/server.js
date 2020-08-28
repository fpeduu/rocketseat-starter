const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const requireDir = require("require-dir")

// Iniciando o App
const app = express()

app.use(express.json())
app.use(cors())

// Iniciando o MongoDB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

// Requerindo os modelos
requireDir("./src/models")

const Product = mongoose.model("Product")

//Rotas
app.use("/", require("./src/routes"))

app.listen(5000)