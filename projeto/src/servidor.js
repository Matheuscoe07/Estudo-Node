const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

/*
app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})
*/

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) 
})

app.get('./produtos/:id', (rec, res, next) => { //o : indica que acessara o id
    res.send(bancoDeDados.getProduto(req.params.id)) 
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta), () => {
    console.log(`Servidor executando na porta ${porta}.`)
}