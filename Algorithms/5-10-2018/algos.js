// LinkedList 


/*
        Add to back 
        Add to front
        iteration
        Contains
        length


        if you can add a tail node 
        and maybe a previous pointer on node
*/

const c = (v) => console.log(v)

var Node = function(v){
    this.value = v 
    this.next = null 
    this.prev = null 
}

var LinkedList = function(){
    this.length = 0
    this.Head = null 
    this.Tail = null 

    this.add = function(v){
        var node = new Node(v)
        if(this.Head == null){
            this.Head = node 
            this.Tail = node 
        }else{

                var temp = this.Tail
                this.Tail = node 
                this.Tail.prev = temp 
                temp.next = this.Tail

        }
        return this 
    }

    this.addToFront = function(v){
        var node = new Node(v)
        if(this.Head == null){
            this.Head = node 
            this.Tail = node 
        }else{
                var temp = this.Head
                this.Head = node 
                this.Head.next = temp 
                temp.prev = this.Head
        }
        this.length++
        return this 
    }

    this.contains = function(v){
        var cur = this.Head
        while(cur!=null){
            if(cur.value == v)
                return true
            cur = cur.next
        }

        return false 
    }

    this.iter = function(){
        var cur = this.Head
        while(cur!=null){
            c(cur.value)
            cur = cur.next
        }
        return this 
    }

    this.iter_back_to_front = function(){
        var cur = this.Tail
        while(cur != null){
            c(cur.value)
            cur = cur.prev
        }
    }

    this.removeFront = function(){
        this.Head = this.Head.next
        return this 
    }

    this.removeFromBack = function(){
        this.Tail = this.Tail.prev
        this.Tail.next = null 
        return this 
    }
}



var list = new LinkedList()
list.addToFront(1)
list.addToFront(4)
list.addToFront(2)
list.add(100)
//list.iter()
c('--------------------')
c('----------------------')
//list.iter_back_to_front()

//c(list.contains(100))


list.removeFromBack()
list.removeFront()
list.iter()

