# car.py

class car:
    def __init__(self,price, speed, fuel,mileage):
        self.price = str(price) 
        self.speed = str(speed)+'mph'
        self.fuel = 'Full' if fuel == True else 'Not Full'
        self.tax = '15%' if price > 10000 else '12%'
        self.mileage = str(mileage)
    def displayInfo(self):
        print( 'Price: '+self.price+'\n'+'Speed: '+self.speed+'\n'+'Fuel: '+self.fuel+'\n'+'Mileage: '+self.mileage+'\n'+'Tax: '+self.tax )

def run():
    inst1 = car(1200000,230,True,60)
    inst1.displayInfo()

run()