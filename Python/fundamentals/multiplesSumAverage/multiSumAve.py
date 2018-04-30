# multipes sum and average 

from functools import reduce as rd
import math as m 

divisible = lambda x,val : x % val != 0
def odd_nums(): return [ x for x in range(1,1000) if divisible(x,2)]

def multiple_five(): return [x for x in range(5,1000000) if divisible(x,5)]

# there are many ways of solving sum problem you can do 
# sum(array_here) or I can import reduce from functools and sum all the values 
# in this case I'm going to use reduce because... it's not as boring as using sum 
# I could iterate through the set and add all the values to a variable 
# but I really don't want to do that!

def _sum(array) : return rd((lambda acc,item:acc+item),array)


def average(a): return m.floor(_sum(a)/len(a))








