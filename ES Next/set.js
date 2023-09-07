//nao aceita repeticao e nao e indexada

const times = new Set()
times.add('VASCO')
times.add('SAO PAULO').add('SANTOS').add('Corinthians')
times.add('FLAMENGO')
times.add('VASCO') //ignorado

console.log(times)
console.log(times.size)
console.log(times.has('VASCO'))
console.log(times.has('vasco'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
console.log(nomesSet.size)