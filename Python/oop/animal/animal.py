# animal.py
p = lambda x : print(x)
class Animal:
    def __init__(self,name,health):
        self.name = name 
        self.health = health 
    def walk(self):
        self.health -= 1 
        return self 
    def run(self):
        self.health -= 5 
        return self 
    def display(self):
        p(self.health)
        return self 


class Dog(Animal):
    def __init__(self,name):
        super().__init__(name, 150)
    def pet(self):
        self.health += 5 
        return self 


# chief = Dog('Cheif')
# chief.run().run().walk().pet().run().display()



class Dragon(Animal):
    def __init__(self,name):
        super().__init__(name,170)
    def fly(self):
        self.health -= 10
        return self 
    def display(self):
        s = '{} {}'.format(self.health, 'Im a big dragon!!!')
        p(s)
        return self 

dragon = Dragon('Big Dragon')

dragon.run().fly().fly().fly().display()


