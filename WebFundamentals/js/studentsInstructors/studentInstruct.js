
var c = (v) => console.log(v)

var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }


var beautifyStudents = function(arr){
    var beauti = arr.map(x => x)
                    .reduce((acc,cur) => acc + cur.first_name + " " + cur.last_name + '\n', '')
    c(beauti)
    return beauti
}


var beautifyTeachesStudents = function(){
    var str = 'Students \n' 
    + users.Students.map(x => x)
            .reduce((c,i) => c + i.first_name + " " + i.last_name + '\n', '') + 
            'Instructors \n' + users.Instructors.map(x => x)
            .reduce((c,i) => c + i.first_name + " " + i.last_name + '\n', '')
    c(str)
    return str
}


beautifyStudents(students)


beautifyTeachesStudents(users)