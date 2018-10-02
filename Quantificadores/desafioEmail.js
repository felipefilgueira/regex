const texto = `Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.com
- asda@asdasda
-@asda.com`


console.log(texto.match(/\w+@\w+\..+/g))