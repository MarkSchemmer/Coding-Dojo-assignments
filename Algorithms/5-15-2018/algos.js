// Stack Lifo 


var Node = function(v){
    this.value = v 
    this.next = null 
}


var LinkedList = function(){
    this.Head = null 
    this.length = 0
    this.c = (v) => console.log(v)

    this.AddToFront = function(v){
        var node = new Node(v)
        if(this.Head==null){
            this.Head = node 
        }else{
            var temp = this.Head
            this.Head = node 
            this.Head.next = temp 
        }

        this.length++
        return this 
    }


    this.removeFront = function(){
        this.Head = this.Head.next
        this.length--
        return this 
    }

    this.iter = function(){
        var cur = this.Head
        while(cur!=null){
            this.c(cur.value)
            cur = cur.next
        }

        return this 
    }
}



var Stack = function(){

    this.list = new LinkedList()
    this.add = function(v){
        this.list.AddToFront(v)
    }

    this.remove = function(){
        if(this.list.length <=0){
            throw new Error('Stack has 0 elements')
        }else{
            this.list.removeFront()
        }
    }

    this.count = function(){
        return this.list.length
    }

    this.iter = function(){
        this.list.iter()
    }
}