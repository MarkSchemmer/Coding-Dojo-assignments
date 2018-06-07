/*






*/

var Node = function(value){
    this.value = value
    this.Next = null
}

var LinkedList = function(){
    this.Head = null  
    this.Count = 0 
    this.NumericalCount = 1

    this.AddToFront = function(value){
        var node = new Node(value)
        if(this.Head == null){
            this.Head = node
        }else{
            var temp = this.Head
            this.Head = node 
            this.Head.Next = temp
        }
        this.Count++ 
        return this 
    }

    this.iter = function(){
        var cur = this.Head 
        while(cur!=null){
            console.log(cur.value)
            cur = cur.Next
        }
        return this 
    }

    this.popAll = function(){
        var list = []
        cur = this.Head
        while(cur!=null){
            list.push(cur.value)
            cur = cur.Next
        }
        return Number(list.join(''))
    }

    this.removeLast = function(){
        var cur = this.Head
        while(cur.Next != null){
            cur = cur.Next
        }
        cur = null 
        return this
    }

    this.popAllNumerical = function(obj){
        if(this.Head==null){
            return obj 
        }
     
        var cur = this.Head
        while(cur != null){
            var prev = cur 
            cur = cur.Next   
        }
        obj.list.push(cur.value)
        obj.power.push(this.NumericalCount)
        this.NumericalCount++
        cur = null 
        this.popAllNumerical(obj)
    }
}



// const add = (x,y) => x + y 

// var list = new LinkedList()
// var item1 = list.AddToFront(1).AddToFront(2).AddToFront(3).popAll()


// var list2 = new LinkedList()
// var item2 = list2.AddToFront(1).AddToFront(2).AddToFront(3).popAll()
// console.log(item2)
// console.log(add(item1,item2))


// var numericalTest = new LinkedList()
//var obj = numericalTest.AddToFront(3).AddToFront(2).AddToFront(1).popAllNumerical({'list':[], 'power':[]})
//console.log(obj)


var test_remove = new LinkedList()
test_remove.AddToFront(3).AddToFront(2).AddToFront(1).iter().removeLast().iter()