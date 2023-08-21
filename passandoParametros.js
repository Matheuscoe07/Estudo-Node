//Passando parametros entre modulos
module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`) //Nesse caso tem que ser a crase
}