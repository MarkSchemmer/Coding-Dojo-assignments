// Doubly Linked List

const c = (v) => console.log(v)

var Node = function(v){
    this.value = v 
    this.next = null 
    this.prev = null 
}

var LinkedList = function(){
    this.Head = null 
    this.Tail = null 
    this.length = 0

    this.addToFront = function(v){
            this.length++
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
            return this 
    }

    this.addToBack = function(v){
        this.length++
        var node = new Node(v)
        if(this.Tail==null){
            this.Head=node
            this.Tail=node
        }else{
            var temp = this.Tail
            this.Tail = node
            this.Tail.prev = temp 
            temp.next = this.Tail
        }

        return this 
    }


    // this.addBefore = function(item,before){
    //          var cur = this.Head
    //          while(cur.next!=null){
    //             if(cur.value==item){
    //                 if(cur==null){

    //                 }
    //             }
    //             cur = cur.next
    //          }
    // }

    this.removeFront = function(){
            this.length--
            if(this.Head!=null){
               this.Head = this.Head.next 
               this.Head.prev = null 
            }
            return this 
    }

    this.removeBack = function(){
            this.length--
            if(this.Tail!=null){
                this.Tail = this.Tail.prev
                this.Tail.next = null 
            }

            return this 
    }

    this.remove = function(item){
            var cur = this.Head
            while(cur!=null){
                if(item==cur.value){
                    if(cur.prev == null){
                        this.removeFront() 
                    }else if(cur.next==null){
                        this.removeBack()
                    }else{
                        cur.prev.next = cur.next 
                        cur.next.prev = cur.prev
                        cur = null 
                    }
                        return this 
                }
                cur = cur.next 
            }

            return this 
    }

    this.iter = function(){
            var cur = this.Head
            while(cur != null){
                c(cur.value)
                cur = cur.next
            }
            return this 
    }

    this.iter_from_back = function(){
            var cur = this.Tail
            while(cur != null){
                c(cur.value)
                cur = cur.prev
            }
            return this 
    }


    this.clear = function(){
        this.length = 0
        this.Head = null 
        this.Tail = null 
        return this 
    }
}



var list = new LinkedList()

list.addToFront(3).addToFront(2).addToFront(1).remove(2).iter()
