keys = lambda obj : obj.keys()
values = lambda obj : obj.values()

zipArrays = lambda ar1, ar2: dict(zip(ar1,ar2))


isPalindron = lambda s : [ x for x in s.lower() ] == [ x for x in s.lower() ][::-1]