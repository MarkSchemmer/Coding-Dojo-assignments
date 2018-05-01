# insertion sort 

def insertion_sort(a):
    for i in range(len(a)-1):
        for j in range(i+1,0, -1):
            if a[j] < a[j-1]:
                temp = a[j]
                a[j] = a[j-1]
                a[j-1] = temp 
    return a 

print(insertion_sort([2,3,4,45,7,-9,1]))





