const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates") 
// https://localhost:3000/usuarios
app.get('/usuarios/:id', (requisicao, resposta) => {
    // resposta.sendFile(`${caminhoBase}/usuarios.html`)
    const id = requisicao.params.id
    console.log(`Acessando dados do usuário negro do id: ${id}`)

})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
    // resposta.send("NEGROOO do Nodemon")
}) 

app.listen(3000, () =>{
    console.log("Servidor negro rodando na porta 3000!")
})