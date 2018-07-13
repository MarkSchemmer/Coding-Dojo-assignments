/*
    case 1... we are deleting a leaf node...
    Need to keep track of the parent node.



        when deleting the root in tree you need to put in the hightest value on the left side

*/
const gtr = (x,y) => x > y ? x : y 

let Leaf = function(value){
    this.value = value
    this.left = null 
    this.right = null 
}

Leaf.prototype.addLeaf = function(leaf){
    if(this.value < leaf.value){
        if(this.right == null){
            this.right = leaf
        } else {
            this.right.addLeaf(leaf)
        }
    } else {
        if(this.left == null){
            this.left = leaf 
        }else{
            this.left.addLeaf(leaf)
        }
    }
}

Leaf.prototype.travASC = function(){
    if(this.right!= null){  
        this.right.travASC()
    }
    console.log(this.value)

    if(this.left!=null){
        this.left.travASC()        
    }
    return this 
}

Leaf.prototype.travDec = function(){
    if(this.left!= null){  
        this.left.travDec()
    }
    console.log(this.value)
    if(this.right!=null){
        this.right.travDec()        
    }
    return this 
}


/*
    remove leaf node....

*/

Leaf.prototype.removeLeaf = function(val){
    if(this.right!=null&&this.right.value == val && this.right.right==null&&this.right.left==null){
        this.right = null 
    } else if(this.left!=null&&this.left.value==val&&this.left.left==null&&this.left.right==null){
        this.left = null
    } else if(this.right==val &&){

    }
}

Leaf.prototype.getLeaf = function(val){
    if(val > this.value){
        if(this.right.value == val){
            this.removeLeaf(val)
        } else {
            this.right.getLeaf(val)
        }
    } else {
        if(this.left.value == val){
            this.removeLeaf(val)
        } else { 
            this.left.getLeaf(val)
        }
    }
}

let findDepth = function(node){
    if(node == null){
        return 0
    }else{
        let lDepth = findDepth(node.left)
        let rDepth = findDepth(node.right)

        if(lDepth > rDepth){
            return lDepth + 1
        } else {
            return rDepth + 1 
        }
    }
}

let Tree = function(){
    this.root = null 
    this.count = 0
}

Tree.prototype.add = function(value){
    this.count++
    let leaf = new Leaf(value)
    if(this.root == null){
        this.root = leaf 
    }else {
        this.root.addLeaf(leaf)
    }

    return this 
}

Tree.prototype.traverseAscending = function(){
    if(this.root == null){
        console.log('no elements')
    }else{
        this.root.travASC()
    }
}

Tree.prototype.traverseDecending = function(){
    if(this.root == null){
        console.log('no elements')
    } else{
        this.root.travDec()
    }
}


Tree.prototype.depth = function(){
    if(this.root==null){
        return 0 
    } else {
        return findDepth(this.root)
    }
}

Tree.prototype.remove = function(val){
    if(this.root!=null){
        this.root.getLeaf(val)
    }
}


let tree = new Tree()
tree.add(10).add(15).add(12).add(12).add(90).add(8).add(2).add(14)
console.log(tree)
tree.traverseDecending()
tree.depth()