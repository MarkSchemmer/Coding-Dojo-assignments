/*
    Doubly Linked List
*/

var Node = function(value){
    this.value = value
    this.Next = null 
    this.Prev = null 
}

var LinkedList = function(){
    this.Head = null 
    this.Tail = null 
    this.Count = 0 


    this.AddToFront = function(value){
        this.Count++
        var node = new Node(value)
        if(this.Head == null){
            this.Head = node 
            this.Tail = node 
        }else{
            var temp = this.Head
            this.Head = node
            this.Head.Next = temp
            temp.Prev = this.Head
        }

        return this 
    }
    
    this.AddToBack = function(value){
        this.Count++
        var node = new Node(value)
        if(this.Tail == null){
            this.Head = node 
            this.Tail = node  
        }else{
            var temp = this.Tail
            this.Tail = node 
            this.Tail.Prev = temp 
            temp.Next = this.Tail 
        }
        return this 
    }


    this.removeFront = function(){
        this.Count--
        this.Head = this.Head.Next
        this.Head.Prev = null 
        return this 
    }

    this.removeBack = function(){
        this.Count--
        this.Tail = this.Tail.Prev
        this.Tail.Next = null 
        return this 
    }


    this.Clear = function(){
        this.Head = null 
        this.Tail = null 
        this.Count = 0 
    }


    this.reverse = function(){
        if(this.Count > 1){
            var current = this.Head

            while(current!=null){
                var next = current.Next
                current.Next = current.Prev
                current.Prev = next 
                current = next 
            }

            var head = this.Head
            this.Head = this.Tail
            this.Tail = head 

            return this 
        }
    }


    this.remove = function(value){
        if(this.Count > 0){
            this.Count--
            if(this.Head.value == value){
                this.removeFront()
            }else if(this.Tail.value == value){
                this.removeBack()
            }else{
                var runner = this.Head 
                while(runner!=null){
                   if(runner.value==value){
                       var before = runner.Prev
                       var after = runner.Next
                       runner = null 
                       before.Next = after 
                       after.Prev = before
                       break
                   }else{
                       runner = runner.Next
                   }        
                }
            }
        }


        return this 
    }

    this.contains = function(value){
        var head = this.Head
        var tail = this.Tail

        if(head.value == value || tail.value == value) return true 
        
        while(head!=null && tail != null && head != tail){
                if(head.value == value || tail.value == value) return true 

                head = head.Next
                tail = tail.Prev
        }   

        return false 
    }

    this.iter = function(){
        var runner = this.Head
        while(runner!=null){
            console.log(runner.value)
            runner = runner.Next
        }

        return this 
    }

    this.iterFromBack = function(){
        var runner = this.Tail
        while(runner!=null){
            console.log(runner.value)
            runner = runner.Prev
        }
        return this 
    }
}


var list = new LinkedList()
list.AddToBack(5).AddToBack(4).AddToBack(3).AddToBack(2).AddToBack(1).iter()
console.log('\n\n\n')

list.AddToFront(100).AddToFront(-100)

console.log('\n\n\n\n')

// list.iterFromBack()


// var testContainsTrue = list.contains(100)
// console.log(testContainsTrue)


// var testContainsFalse = list.contains(100000)
// console.log(testContainsFalse)

// list.remove(1).iter()
// console.log()
// list.remove(-100).iter()
// console.log()
// list.remove(3).iter()



list.reverse().iter()


