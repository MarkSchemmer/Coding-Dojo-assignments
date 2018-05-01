# bubble sort 
p = lambda x : print(x)
arr = [x for x in range(15,0,-1)]

def bubble_sort(arr):
    if len(arr) <= 1:
        return arr 
    _bool = True 
    while _bool : 
        _bool = False 
        for idx in range(len(arr)-1):
            if arr[idx] > arr[idx+1]:
                temp = arr[idx]
                arr[idx] = arr[idx+1]
                arr[idx+1] = temp 
                _bool = True
    return arr 

p(bubble_sort(arr)) 
             
