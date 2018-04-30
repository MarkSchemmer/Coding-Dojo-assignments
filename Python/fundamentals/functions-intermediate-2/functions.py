# functions intermediate II

from functools import reduce as rd  

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]


users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def studs(students): 
    return ''.join(  [x['first_name']+' '+x['last_name']+' \n' for x in students])

print(studs(students))


def studs_users (user):
    str = ''
    for x in user.keys():
         str += x + ' \n \n '
         for y in user[x]:
             str += y['first_name'] + ' ' + y['last_name'] + ' \n '
    return str 

print(studs_users(users))


