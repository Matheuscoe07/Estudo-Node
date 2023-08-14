const moduloA = require('../../Modulo local/moduloA')
console.log(moduloA.ola)

//caso esteja dentro do node_modules, não precisa importar todo o caminho, apenas o nome do que se quer pegar no require
//tambem não pode esquecer de colocar o .exports

const http = require('http') //modulo nativo do node
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end('')
}).listen(8080)

const c = require('./pastaC/index')
console.log(c.ola2)