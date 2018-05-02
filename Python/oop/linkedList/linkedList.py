# linkedList.py


class Node:
    def __init__(self,value):
        self.value = value
        self.Next = None 

class LinkedList:
    def __init__(self):
        self.Head = None 
        self.Tail = None 


    def add(self,val):
        node = Node(val)
        if self.Head == None: 
            self.Head = node 
            self.Head.Next = self.Tail
        elif self.Head != None:
            temp = self.Head
            self.Head = node
            self.Head.Next = temp
              
    def append(self,val):
        node = Node(val)
        iter = self.Head
        while iter.Next != None:
            iter = iter.Next
        self.Tail = node 
        iter.Next = self.Tail 
        

    def insertBefore(self,nextVal,val):
        node = Node(val)
        iter = self.Head
        while iter.Next != None:
            if iter.Next.value == nextVal:
                node.Next = iter.Next
                iter.Next = node 
                break 
            iter = iter.Next
            
    def iter(self):
        node = self.Head 
        while node != None:
            print(node.value)
            node = node.Next

beta = LinkedList()

beta.add(1)
beta.add(2)
beta.add(3)
beta.append(-1)
beta.append(-2)
beta.add(9)
beta.append(100)
beta.insertBefore(1,100000)
beta.iter()

