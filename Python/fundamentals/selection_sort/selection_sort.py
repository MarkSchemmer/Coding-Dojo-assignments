# selection sort 

p = lambda x : print(x)

arr = [15,3,9,8,3,2,1,0,-2,4,6,7,8,9,10,11,12,13,13,12,12,12,18]

def selection_sort(a):
    for i in range(len(a)):
        t = i
        for x in range(i+1,len(a)):
            if a[t] > a[x]:
                t = x
        temp = a[i] 
        a[i] = a[t] 
        a[t] = temp  
    return a 

    
ar = selection_sort(arr)
p(ar)
