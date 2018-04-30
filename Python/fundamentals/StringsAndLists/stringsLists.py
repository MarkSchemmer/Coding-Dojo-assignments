# strings and lists 
import re 
import math 

x = [2,54,-2,7,12,98]
def findReplace():
    words = "It's thanksgiving day.  day. It's my birthday,too!"
    x = [2,54,-2,7,12,98]
    new_word = re.sub('day','month',words, 1)
    print(words.find('day'))
    print(new_word)
    print(min(x))
    print(max(x))
    print(x[:1]+x[-1:])

def NewList():
    x = [19,2,54,-2,7,12,98,32,10,-3,6]
    half = math.floor(len(x)/2)
    x.sort()
    new_list = x[:half]
    x=x[half:]
    x.insert(0, new_list)
    return x 

    
