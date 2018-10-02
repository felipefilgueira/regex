const texto = 'Romário era um exelente jogador\n, mas hoje é um politico questionador'

console.log(texto.match(/^r.*r$/gi)) // problema do dotall
console.log(texto.match(/^r[\s\S]*R$/gi))