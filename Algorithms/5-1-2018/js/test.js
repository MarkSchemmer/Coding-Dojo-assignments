const assert = require('assert')
const methods = require('./algos.js')


// test data 

const leaders = {
    'Kim Jong-un':'Korea',
    'Trump':'USA',
    'Macron':'France',
    'Teresa May':'Brit',
    'Bill Gates':'Microsoft'
}

describe('algos for 5-1-2018',function(){
    it('palindron',function(){
        var input = 'tacoCat'
        var expected = true 
        var actual = methods.isPalindron(input)
        assert.deepEqual(actual, expected)
    })

    it('keys', function(){
        var input = leaders
        var expected = ['Kim Jong-un', 'Trump','Macron','Teresa May','Bill Gates']
        var actual = methods.keys(input)
        assert.deepEqual(actual, expected)
    })

    
    it('values', function(){
        var input = leaders
        var expected = ['Korea','USA','France','Brit','Microsoft']
        var actual = methods.values(input)
        assert.deepEqual(actual, expected)
    })

    // it('making dictionary ', function(){
    //     var input1 = ['Korea','USA','France','Brit','Microsoft'],
    //         input2 = ['Kim Jong-un', 'Trump','Macron','Teresa May','Bill Gates']
    //     var expected = leaders
    //     var actual = methods.zipArrays(input2,input1)
    //     assert.deepEqual(actual, expected)
    // })


})