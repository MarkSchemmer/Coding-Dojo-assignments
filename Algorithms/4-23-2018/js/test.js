const assert = require('assert') 
const methods = require('./4-23-2018.js')


var obj = {
    name : 'mark',
    lastName : 'Schemmer',
    favColor : 'blue'
}

var letts = ['a','b','c'], nums = [1,2,3]

describe('test for 4-23-218 algos of the day ', function(){
    it('demo test',function(){
        assert.equal(1,1)
    })

    it('testing Unzip',function(){
        var input = obj
        var expected = [['name','lastName','favColor'],['mark','Schemmer','blue']]
        var actual = methods.UnZip(obj)
        assert.deepEqual(actual,expected)
    })

    it('test zip', function(){
        var expected = {
            a:1,
            b:2,
            c:3
        }

        var actual = methods.zip(letts, nums)
        assert.deepEqual(actual,expected)
    })
})