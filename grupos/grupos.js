const texto = 'O Jose Simao e muito engraçado... hehehehehe'
console.log(texto.match(/(he)+/g))

const texto2 = 'http://wwww.site.info www.escola.ninja.br google.com.ag'
console.log(texto2.match(/(http:\/\/)?(www.)?\w.+\.\w.+\w{0,2}/g))