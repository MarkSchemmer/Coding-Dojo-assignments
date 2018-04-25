const assert = require('assert')
const methods = require('./4-25-2019-algos')

describe('my tests for algos for 4-25-2019', function(){
    it('palindrone test', function(){
        var input = 'racecar'
        var expected = true 
        var actual = methods.isPalindrone(input)
        assert.equal(actual, expected)
    })

    it('panagram test1', function(){
        var input = 'The quick brown fox jumpeds over the lazy dog'
        var expected = true 
        var actual = methods.panagram(input)
        assert.equal(expected, actual)
    })
})