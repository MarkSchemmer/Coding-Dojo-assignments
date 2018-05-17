/*
    Implementing a Stack and Queue 

    with using a doubley linked list
*/


var Node = function(v){
    this.value = v 
    this.next = null 
    this.prev = null  
}


var LinkedList = function(){
    this.length = 0
    this.Head = null 
    this.Tail = null 


    this.addToFront = function(v){
        var node = new Node(v)
        if(this.Head==null){
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


    this.remve_back = function(){
        if(this.Tail!=null){
            this.Tail = this.Tail.prev 
            this.Tail.next = null 
            this.length--
        }
        return this 
    }


    this.addToBack = function(v){
            var node  = new Node(v)
            if(this.Head==null){
                this.Head = node 
                this.Tail = node 
            }else{
                var temp = this.Tail 
                this.Tail = node 
                this.Tail.prev = temp 
                temp.next = this.Tail
            }
            this.length++
            return this 
    }


    this.remove_front = function(){
        if(this.Head!=null){
                this.Head = this.Head.next
                this.Head.prev = null 
        }

        this.length--
        return this 
    }


}



var Queue = function(){
    var list = new LinkedList()
    this.dequeue = function(){
        if(list.Head == null ){
            throw new Error('There is no elements in object')    
        }else{
            var ele = list.Head.value
            list.remove_front()
            return ele
        }
    }

    this.enqueue = function(obj){
        list.addToBack(obj)
    }
}