const texto = 'Romário era um exelente jogador\n, mas hoje é um politico questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ inicio da linha/string
console.log(texto.match(/r$/gi)) // $ fim da linhas/string

console.log(texto.match(/^r.*r$/gi)) // problema do dotall