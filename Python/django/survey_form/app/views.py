from django.shortcuts import render,redirect

# Create your views here.


def home(request):
    
    if 'count' not in request.session:
        request.session['count'] = 0 

    if request.method == 'POST':
        r,p = request.session, request.POST
        r['count'] += 1
        keys = {
            'name':r['name'],
            'location':r['location'],
            'lang':r['lang'],
            'com':r['com'],
            'count':r['count']
        }
        return render(request, 'app/result.html',keys)
    return render(request, 'app/index.html')
