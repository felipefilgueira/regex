const texto = `Lista telefônica:
- (11) 98756-1212
-98765-4321
- (85) 1234-1233`

console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}\-\d{4}/g))