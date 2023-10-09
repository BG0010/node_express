const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates") 

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
    // resposta.send("NEGROOO do Nodemon")
}) 

app.listen(3000, () =>{
    console.log("Servidor negro rodando na porta 3000!")
})