// LinkedList 5-8-2018

const c =  (x) => console.log(x)
var Node = function(v){
    this.val = v 
    this.next = null 
}

var LinkedList = function(){
    this.Head = null 
    this.length = 0

    this.addToFront = function(value){
        var node = new Node(value)
        this.length++
        if(this.Head == null){  
            this.Head = node
        }else{
            var temp = this.Head
            this.Head = node 
            this.Head.next = temp 
        }
        return this 
    }

    this.removeFront = function(){
        if(this.length > 0)
            this.length--
        this.Head = this.Head.next
        return this 
    }


    this.addToBack = function(value){
        var node = new Node(value)
        this.length++
        if(this.Head == null){
            this.Head = node
        }else{
            var cur = this.Head
            while(cur.next != null){
                cur = cur.next
            }
            cur = null 
        }

        return this 
    }

    this.removeFromBack = function(){
            var cur = this.Head
            if(this.length > 0){
                this.length--
            }
            while(cur.next.next != null){
                cur = cur.next
            }
            cur.next = null 
            return this 
    }

    this.iter = function(){
        var node = this.Head
        while (node != null){
            c(node.val)
            node = node.next
        }
        return this 
    }

}

var test1 = new LinkedList()
                    .addToFront(1)
                    .addToFront(2)
                    .addToFront(3)
                    .addToFront(7)
                    .removeFromBack()
                    .removeFront()
                    .iter()

c('The length of the list is :'+test1.length)