/*
    make a ssl with a way to tell if there is a loop in the list

    I will make two versions a sll and a dll 
*/


const c = (obj) => console.log(obj)

var Node = function(value){
    this.value = value
    this.Next = null 
}

var LinkedList = function(){
    this.Head = null
    this.Tail = null 
    this.Count = 0

    this.AddToFront = function(value){
        this.Count++
        var node = new Node(value)
        if(this.Head==null){
            this.Head = node 
            this.Tail = node 
        }else{
            var temp = this.Head
            this.Head = node 
            this.Head.Next = temp 
        }

        return this 
    }

    this.iter = function(){
        var runner = this.Head
        while(runner!=null){
            c(runner.value)
            runner = runner.Next
        }
        return this 
    }

    this.RemoveFront = function(){
        this.Head = this.Head.Next
        this.Count--
        return this 
    }


    this.createChain = function(where){
        var counter = 0
        var tail = this.Tail
        var runner = this.Head
        while(runner!=null){

            if(where == counter){
                tail.Next = runner 
                break;
            }
            counter++
            runner = runner.Next
        }

        return this 
    }


    this.ShowChain = function(){
            var counter = 0
            var address = {}
            var runner = this.Tail.Next
            if(runner != this.Tail){
                while(runner != this.Tail){
                    address[counter.toString()] = runner 
                    runner = runner.Next
                    counter++
                }
                counter+=1
                address[counter.toString()] = this.Tail
                return address
            }
            return null 
        }
    }




var list = new LinkedList()
list.AddToFront(1).AddToFront(2).AddToFront(3).AddToFront(4).AddToFront(5).AddToFront(6).iter()

c('--------------------------------------------------------')
c('---------------------------------------------------------')

var chain = list.createChain(2).ShowChain()

Object.keys(chain).map(x => chain[x]).forEach(x => c(x.value))
