# fibonacci sequence


def fib(n, ar):
    if n <= 2:
        return ar[len(ar)-1]
    else:
        print(ar)
        ar.append(ar[len(ar)-1]+ar[len(ar)-2])
        return fib(n-1,ar)