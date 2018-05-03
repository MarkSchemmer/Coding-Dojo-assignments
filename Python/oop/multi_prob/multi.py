# multi.py

p = lambda x : print(x)

multi = lambda arr, v : [[1 for y in range(x*v)] for x in arr]


p(multi([1,2,3],3))