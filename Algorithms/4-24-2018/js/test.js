const assert = require('assert')
const data = require('./4-24-2018-algos')
const revArr = data.revArr
const revStr = data.revStr
const acro = data.acro


describe('tests for ', function() {
    it('reverse an array', function() {
       var input = [1,2,3]
       var expected = [3,2,1]
       var actual = revArr(input)
       assert.deepEqual(expected,actual)
    })

    it('reversing a string', function(){
        var input = "Mark Schemmer"
        var expected = "remmehcS kraM"
        var actual = revStr(input)
        assert.deepEqual(expected,actual)
    })

    it('returning the fist character of the string', function(){
        var input = "Mongo Express Angular Nodejs"
        var expected = "MEAN"
        var actual = acro(input)
        assert.equal(expected,actual)
    })
})