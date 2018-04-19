const assert = require('assert')
const data = require('./4-19-2018-algos.js')
const doubleUp = data.doubleUp


describe('testing doubleUp and removeDupes', function(){
    it('test 1 of doubleUp()',function(){
        var input = [1,2,3]
        var expected = [1,1,2,2,3,3]
        var actual = input.doubleUp()
        assert.deepEqual(actual, expected)
    })

    it('test 1 for removeDupes()', function(){
        var input = [1,1,1,1,2,2,2,2,3,3,3,3,3]
        var expected = [1,2,3]
        var actual = input.removeDupes()
        assert.deepEqual(actual, expected)
    })
})