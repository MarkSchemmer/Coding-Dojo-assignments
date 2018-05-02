# math_dojo.py

# pt 1 
p = lambda x : print(x)
class MathDojo_part_1:
    def __init__(self):
        self.result = 0
    def add(self,integer):
        self.result += integer
        return self 
    def subtract(self,integer):
        self.result -= integer 
        return self  

md = MathDojo_part_1()
p(md.add(10).add(20).add(5).subtract(100).subtract(2).result)


def test(*args):
    for x in args:
        print(x)


class MathDojo: 
    def __init__(self):
        self.result = 0
        self.is_arr = lambda obj : sum(obj) if isinstance(obj, list) else obj 
    def add(self,*args):
        for x in args:
            self.result += self.is_arr(x)
        return self
    def subtract(self, *args):
        for x in args: 
            self.result -= self.is_arr(x)
        return self 

md = MathDojo()
p(md.add(1,2,3,4,5,6,7,[x for x in range(100)]).subtract(6,7,8,8,4,1,2,3,4,5,6,7,7,[x for x in range(10)]).result)


"""

To add tuples I think I could just test for the type and return the sum 
I would just edit my .is_arr method 

"""