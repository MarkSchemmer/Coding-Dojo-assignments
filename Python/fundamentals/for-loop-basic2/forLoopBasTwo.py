# for loop basics 2 

b = lambda x : 'big' if x < 0 else x 
def biggest_size(ar): return [b(x) for x in ar]


sum_total = lambda ar : sum(ar)

average = lambda ar : sum(ar)/len(ar)

lenArray = lambda ar : len(ar)


minimum = lambda ar : min(ar)

maximum = lambda ar : max(ar)

def ult(ar): 
    return dict(zip(['sum','average','min','max','len'],
    [sum(ar), sum(ar)/len(ar), min(ar), max(ar), len(ar)]))

revList = lambda ar : ar[::-1]




