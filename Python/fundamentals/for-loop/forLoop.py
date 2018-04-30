# for loop basic I


p = lambda x : print(x)
divis = lambda x, y : x % y == 0
basic = [p(x) for x in range(150) ]

multi5 = [x for x in range(5,1000000) if divis(x, 5) ]


def countDojoWay(x):
    if divis(x,10):
        return 'Coding dojo'
    elif divis(x,5):
        return 'dojo'
    else:
        return x

dojo_way = [countDojoWay(x) for x in range(1,100) ]

suckHuge = sum([x for x in range(1,500000,2)])

countDownFour = [p(x) for x in range(2018,0,-4)]


def flex_count(low,high,mult):
    return [x for x in range(low,high+1) if divis(x,mult)]

