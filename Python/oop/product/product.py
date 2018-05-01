# product.py

class prod:
    def __init__(self,price, name,weight,brand,status="for sale"):
            self.price = price
            self.name = name 
            self.weight = weight
            self.brand = brand 
            self.status=status
            self.amountAfterTax=0
    def info(self):
        print('Price {} name : {} weight {} brand {} status {} amount after tax {}'
              .format(self.price, self.name, self.weight,self.brand,self.status,self.amountAfterTax))
        return self 
    def sell(self):
        self.status = 'sold'
        return self 
    def addDiscount(self,disc):
        self.price = self.price - (self.price*disc)
        return self 
    def addTax(self,tax):
         self.amountAfterTax=(tax*self.price)+self.price
         print(self.amountAfterTax)
         return self 
    def reason_for_return(self,ch):
        if ch == 'd':
            self.status = 'defective'
            self.price = 0
        elif ch == 'n':
            self.status = 'for sale'
        elif ch == 'o':
            self.status = 'used'
            self.price = self.addDiscount(0.20)

def run():
    inst = prod(10,'shoes',30,'nike')
    inst.sell().info().addTax(90).info()

run()
            

