let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];



let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


 var challenge1 = function(students){
    var str = ''
    students.forEach(x => {
        str += 'Name: ' + x.name + ', ' + 'Corhort: ' + x.cohort + '\n'
    })
    return str
 }

 var chal_1 = challenge1(students)
 console.log(chal_1)


 var challenge2 = function(users){
     var str = 'EMPLOYEES \n'
     users.employees.forEach( (element, index) => {
        str += index+1 + ' - ' + element.first_name + ', ' + element.last_name + '\n'
     })
     str += 'MANAGERS \n'
     users.managers.forEach( (element, index) => {
         str += index+1 + ' - ' + element.first_name + ', ' + element.last_name + '\n'
     } )
     return str
 }


 var chal_2 = challenge2(users)
 console.log(chal_2)

