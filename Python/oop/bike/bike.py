# bike.py

class bike:
    def __init__(self,price,max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
        self.p = lambda x : print(x)
    def displayInfo(self):
        s = 'price: {} max speed: {} total miles: {}'.format(self.price, self.max_speed, self.miles)
        self.p(s)
        return self
    def ride(self):
        self.miles += 10
        self.p('Riding')
        return self 
    def reverse(self):
        self.miles -= 5 
        self.p('Reversing')
        return self 

def run():
    inst1 = bike(500,200)
    inst1.ride().ride().ride().reverse().displayInfo()
    inst2 = bike(100,100)
    inst2.ride().ride().reverse().reverse().displayInfo()
    inst3 = bike(10,10)
    inst3.reverse().reverse().reverse().displayInfo()


run()