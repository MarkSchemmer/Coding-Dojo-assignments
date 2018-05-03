# algos py 


def un_zip(obj):
    return [list(obj.keys()),list(obj.values())]

def countChars(obj):
    new_obj = {} 
    for key in obj: 
        if key in new_obj:
            new_obj[key] += 1 
        else :
            new_obj[key] = 1
    return new_obj