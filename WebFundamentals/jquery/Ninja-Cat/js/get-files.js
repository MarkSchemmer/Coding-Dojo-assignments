
const testFile = '../img'
const fs = require('fs')
const c = (v) => console.log(v)

var files = fs.readdirSync(testFile), 
            cats = [], 
            ninjas = [], 
            obj = {}, 
            catRegex = /cat/,
            ninjaRegex = /ninja/

files.forEach(file => {
    file.match(catRegex) ? cats.push(file): ninjas.push(file)
})

obj.cats = cats
obj.ninjas = ninjas 

c(obj)


