const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates") 
// https://localhost:3000/usuarios

app.use(express.urlencoded({
    extended: true //converter o corpo da requisição
}))

app.use(express.json())

app.post('/cadastrar/salvar', (requisicao, resposta) =>{
    console.log(requisicao.body)
})

app.get('/cadastrar', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})

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