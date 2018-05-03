const assert = require('assert')
const methods = require('./algos.js')

describe('algos for 5-2-2018', function(){
    it('test for zip', function(){
        var input = {
            a:5,
            b:4,
            c:10,
            cat:100,
            dog:250,
            slug:12345455
        }
        var expected = [['a','b','c','cat','dog','slug'],[5,4,10,100,250,12345455]]
        var actual = methods.unZip(input)
        assert.deepEqual(actual, expected)
    })

    it('test for count chars ', function(){
        var input = 'Hello World Dojo Style'
        var expected = {
            H: 1,
            e: 2,
            l: 4,
            o: 4,
            ' ': 3,
            W: 1,
            r: 1,
            d: 1,
            D: 1,
            j: 1,
            S: 1,
            t: 1,
            y: 1 
        }
        var actual = methods.countChars(input)
        assert.deepEqual(actual, expected)
    })
})