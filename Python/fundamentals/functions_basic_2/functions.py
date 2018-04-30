# functions basic II

p = lambda x : print(x)
def countdown(val):
    return [x for x in range(val,0,-1)]

def preturn(arr):
    p(arr[0])
    return arr[-1:]


def plus_len(arr): return arr[:1]+len(arr)

gtr = lambda x, y: x > y 
def greater_sec(arr,n):return [x for x in arr if gtr(x,n) ]


     
