const assert = require('assert')
const methods = require('./algos.js')

describe('algos for 5-4-2018',function(){

    it('is alphabet', function(){
            var input = ';lsakjd;lakjgasl;kjfa;slvjs;lkdj'
            var expected = false
            var actual = methods.IsAlphabetical(input)
            assert.equal(actual, expected)
    })


    it('is alpa pass test', function(){
        var input = 'abcdefghijklmnopqrstuvwxyz'
        var expected = true 
        var actual = methods.IsAlphabetical(input)
        assert.equal(actual, expected)
    })

    it('valid braces test 1 pass test', function(){
        var input = '<<<<>>>>'
        var expected = true 
        var actual = methods.validBraces(input)
        assert.equal(actual,expected)
    })

    it('valid braces test 2 fail test', function(){
        var input = '{}{}{{{{{}{{))()((((((('
        var expected = false 
        var actual = methods.validBraces(input)
        assert.equal(actual, expected)
    })

})