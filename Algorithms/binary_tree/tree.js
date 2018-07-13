var Leaf = function(value){
    this.value = value
    this.left = null 
    this.right = null 
}

Leaf.prototype.addNode = function(n){
      if(n.value < this.value){
        if(this.left == null){
            this.left = n
        }else{
            this.left.addNode(n)
        }
      }else{
          if(this.right == null){
              this.right = n
          }else{
              this.right.addNode(n)
          }
      }
}

Leaf.prototype.visit = function(){
    if(this.left!=null){
        this.left.visit()
    }
    console.log(this.value)
    if(this.right!=null){
        this.right.visit()
    }
}

Leaf.prototype.backVisit = function(){
    if(this.right!=null){
        this.right.backVisit()
    }
    console.log(this.value)
    if(this.left!=null){
        this.left.backVisit()
    }
}

Leaf.prototype.searchNode = function(n){
      if(n < this.value && this.left!=null){
         if(this.left.value==n){
                return this.left 
         }else{
             return this.left.searchNode(n)
         }
      } else if(n > this.value&&this.right!=null){
            if(this.right.value==n){
                    return this.right
            }else{
                return this.right.searchNode(n)
            }
      }
      return null 
}

Leaf.prototype.findMax = function(){
    if(this.right == null){
        return this 
    }else{ 
        return this.right.findMax()
    }
}

Leaf.prototype.findMin = function(){
    if(this.left==null){
        return this 
    }else{
        return this.left.findMin()
    }
}

var Tree = function(){
    this.count = 0
    this.root = null 
    // methods to implement... 
}

Tree.prototype.addLeaf = function(val){
    this.count++
    var leaf = new Leaf(val)
    if(this.root == null){
        this.root = leaf 
    }else{
        this.root.addNode(leaf)
    }
}

Tree.prototype.traverse = function(){
    this.root.visit()
}

Tree.prototype.traverseBackwards = function(){
    this.root.backVisit()
}

Tree.prototype.search = function(val){
    if(this.root.value == val){
        return this.root
    }else{
        return this.root.searchNode(val)
    }
}

Tree.prototype.isEmpty = function(){
    return this.root == null 
}

Tree.prototype.max = function(){
    if(this.root.right==null){
        return this.root
    }else{
        return this.root.right.findMax()
    }
}

Tree.prototype.min = function(){
    if(this.root.left == null){
        return this.root
    }else{
        return this.root.left.findMin()
    }
}

var tree = new Tree()
tree.addLeaf(200)
tree.addLeaf(2)
tree.addLeaf(201)
tree.addLeaf(280)
tree.addLeaf(240)
tree.addLeaf(290)
tree.addLeaf(350)
tree.addLeaf(-2)
console.log(tree)
tree.traverse()
console.log('\n\n\n\n\n\n\n\n')
tree.traverseBackwards()