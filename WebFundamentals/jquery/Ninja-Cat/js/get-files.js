const testFile = '../img'
const fs = require('fs')


var files = fs.readdirSync(testFile), 
            cats = [], 
            ninjas = [], 
            obj = {}, 
            catRegex = /cat/,
            ninjaRegex = /ninja/,
            obj = {}

files.forEach(file => {
    file.match(catRegex) ? cats.push(file): ninjas.push(file)
})

obj.cats = cats
obj.ninjas = ninjas 


