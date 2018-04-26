const assert = require('assert')
const methods = require('./4-26-2018.js')

describe('algoritms for 4-26-2018', function() {
    it('sigma', function() {
        var input = 5
        var expected = 15
        var actual =  methods.sigma(input)
        assert.equal(actual, expected)
    })

    it('sigma recursion', function() {
        var input = 5
        var expected = 15
        var actual =  methods.sigmaRecursion(input)
        assert.equal(actual, expected)
    })

    it('FizzBuzz', function(){
        var input = 15
        var expected = [1,2,'Fizz',4,'Buzz', 'Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']
        var actual = methods.fizzBuzz(input)
        assert.deepEqual(actual,expected)
    })


    it('coinMachine', function(){
        var input = 210
        var expected = {'pennys':0, 'nickels':0, 'dimes':1, 'quarters':8}
        var actual = methods.coinMachine(input)
        assert.deepEqual(actual,expected)
    })

    it('coinMachine test 2', function(){
        var input = 316
        var expected = {'pennys':1, 'nickels':1, 'dimes':1, 'quarters':12}
        var actual = methods.coinMachine(input)
        assert.deepEqual(actual, expected)
    })
})