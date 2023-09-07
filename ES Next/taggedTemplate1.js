//tagged template
//processar uma template string em uma função

function tag(partes, ...valores) {
    console.log(partes) //partes é o que não está interpolado, as coisas na string mesmo e que não variam
    console.log(valores) //valores é o que esta interpolado na função
    return 'outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)