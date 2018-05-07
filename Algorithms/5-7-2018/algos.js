// singly linked list.

const c = (x) => console.log(x)

function Node(v){
    this.val = v 
    this.next = null
}


function LinkedList(){

    this.Head = null 
    this.length = 0

    this.addToFront= function(v){
        var node = new Node(v)
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
            if (this.length > 1){

                var node = this.Head.next
                this.Head = null 
                this.Head = node 
                this.length--

            }else{
                this.clear()
            }

            return this 
    }

    this.removeLast = function(){
        if(this.length > 1){
            node = this.Head
            this.length--
            while(node.next.next != null){
                node = node.next
            }
            node.next = null 
        }else{
            this.clear()
        }

        return this 
    }

    this.len = function(){
        c('The length of the list is: '+ this.length)
        return this 
    }

    this.addToBack = function(v){
        var node = new Node(v)
        var head = this.Head
        this.length++
        if(head == null){
            this.Head = node 
        }else{
            while(head.next != null){
                head = head.next
            }
            head.next = node 
        }

        return this 
    }
    
    
    this.iter = function(){
        var node = this.Head
        while(node != null){
            c(node.val)
            node = node.next
        }
        c('---------------- end of list ------------')

        return this 
    }

    this.clear = function(){
        this.length = 0
        this.Head = null
        return this 
    }
}

var list = new LinkedList()

// list.addToFront(3)
// list.addToFront(2)
// list.addToFront(1)
// list.addToBack(4)
// list.addToFront(0)
// list.addToBack(5)
// list.removeFront()
// list.removeLast()
// list.removeLast()
// list.iter()
// list.len()

list.addToFront(4).addToFront(2).addToBack(7).addToFront(9).iter()
