const assert = require('assert')
const methods = require('./4-27-2018-algos.js')

describe('algos for 4-27-2018', function() {
    it('fibonacci',function(){
        var input = 5
        var expected = 5
        var actual = methods.fib(input)
        assert.equal(actual, expected)
    })

    it('fibonacci test 2',function(){
        var input = 8
        var expected = 21
        var actual = methods.fib(input)
        assert.equal(actual, expected)
    })

    it('fibonacci test 3',function(){
        var input = 12
        var expected = 144
        var actual = methods.fib(input)
        assert.equal(actual, expected)
    })

    it('change Vals',function(){
        var input = [
            [1,2,3,4],
            [2,2,2,2,2],
            [4,5,6]
        ]
        var expected = [
            [1,'justin',3,4],
            ['justin','justin','justin','justin','justin'],
            [4,5,6]
        ]
        var actual = methods.changeVals(input, 2, 'justin')
        assert.deepEqual(actual, expected)
    })

})