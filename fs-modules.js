const fs = require ('fs')

const texto = 'abc'
fs.writeFile('./teste.txt', texto, (err) => {
    if (err){
    console.log(err)
    }
})