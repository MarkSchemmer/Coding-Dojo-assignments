# store.py


# test info




microsoftProds = {
        'phone':{
            'name':'microsoft phone',
            'cost':500,
            'rating':'very good'
        }, 

        'surface':{
            'name':'micrsoft surface',
            'cost':900,
            'rating':'super() good '
        }
}

class store:
    def __init__(self,products,location,owner):
         self.products = products
         self.location = location
         self.owner = owner
    def add_product(self,name):
        if isinstance(name,list):
            self.products = self.products + name 
        else :
            self.products.update(name)
        return self
    def remove_product(self,item):
        self.products.remove(self.products['name'])
        return self 
    def printingProductInfo(self):
        for obj in self.products.keys():
            print(obj)
            for ob in self.products[obj]:
                print(str(self.products[obj][ob]) + ' ' + str(ob))
class microsoftStore(store):
    def __init__(self, products, location, owner):
        super(microsoftStore, self).__init__(products, location, owner)

micro = microsoftStore(microsoftProds, 'Washington State central command station', 'Bill f###ing Gates')

def run():
    micro.printingProductInfo()
    print(micro.location)
    print(micro.owner)
    micro.add_product({'backpack':{'name':'the wonder pack', 'cost':100000000, 'rating':'Godly'}})
    micro.printingProductInfo()

run()


    safsfsdfd