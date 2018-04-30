const assert = require('assert')
const data = require('../js/algosJs.js')

Array.prototype.joinArr =  function(ch){
    return this.reduce((acc, item) => acc + item + ch , '').slice(0,-1)
}


describe('algos tests for 4-30-2018', function(){
    it('revArray', function(){
        var input = [...Array(4).keys()]
        var expected = [3,2,1,0]
        var actual = data.revArray(input)
        assert.deepEqual(actual, expected)
    })

    it('revStr', function(){
        var input = 'Mark'
        var expected = 'kraM'
        var actual = data.revStr(input)
        assert.deepEqual(actual, expected)
    })


    it('split string', function(){
        var input = 'Hello world'
        var sep = 'l'
        var expected = ['H','e','o',' ','w','o','r','d']
        var actual = data.splitString(input,sep)
        assert.deepEqual(actual, expected)
    })

    it('join array', function(){
        var input = ['H','e','o',' ','w','o','r','d']
        var ch = '|'
        var expected = 'H|e|o| |w|o|r|d'
        var actual = input.joinArr(ch)
        assert.deepEqual(actual, expected)
    })
})
