using System;

namespace doulbeLinkedList
{

    public class Node<T>
    {
        public T value { get; set; }
        public Node<T> Next { get; set; }
        public Node<T> Prev { get; set; }
        public Node(T value)
        {
            this.value = value;
        }
    }
   public class LinkedList<T>
   {
       public int Count = 0;

       public Node<T> Head { get; set; }
       public Node<T> Tail { get; set; }

       public LinkedList<T> Add(T value)
       {
            return AddToFront(new Node<T>(value));
       } 
       private LinkedList<T> AddToFront(Node<T> node)
       {
           this.Count++;

           if(this.Head == null){
               this.Head = node;
               this.Tail = node;
           }else{
               var temp = this.Head;
               this.Head = node;
               this.Head.Next = temp;
               temp.Prev = this.Head;
           }

           return this;
       }

       public LinkedList<T> RemoveFront()
       {
         if(this.Count > 0)
         {
             if(this.Count == 1)
             {
                 Clear();
             }else{
                 this.Head = this.Head.Next;
                 this.Head.Prev = null;
                 this.Count--;
             }
    
         }
         return this;
       }

       public LinkedList<T> RemoveBack()
       {
           if(this.Count > 0)
           {
               if(this.Count==1)
               {
                   Clear();
               }else{
                   this.Tail = this.Tail.Prev;
                   this.Tail.Next = null;
                   this.Count--;
               }
           }

           return this;
       }


       public bool Contains(T _value, out T val)
       {
           var cur = this.Head;
           while(cur!=null){
               T dem = cur.value;
                if(dem.Equals(_value)){
                    val = cur.value;
                    return true;
                }   
           }
           val = default(T);
           return false; 
       }


       public bool nth(int get, out T getter)
       {
           var end = this.Tail;
           var counter = 0;
           while(end!=null)
           {
               if(get == counter){
                   getter = end.value;
                   return true;
               }
               counter++;
               end = end.Prev;
           }
           getter = default(T);
           return false;
       }


       public void Clear()
       {
           this.Head = null;
           this.Tail = null;
           this.Count = 0;
       }
       public LinkedList<T> iter()
       {
           var cur = this.Head;
           while(cur!=null)
           {
            System.Console.WriteLine(cur.value);
            cur = cur.Next;
           }
    
            return this;
       }

   }
}
