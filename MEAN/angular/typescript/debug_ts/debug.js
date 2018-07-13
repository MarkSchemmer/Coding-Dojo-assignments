var myString;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = '9';
/*
    the reason is that the type was declared and we have to stick to that type....
*/
function sayHello(name) {
    return "Hello, " + name + "!";
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
// console.log(sayHello(9)); say issue the the 9 is of type Number not  of type String
console.log(sayHello('9'));
function fullName(firstName, lastName, middleName) {
    var fullName = firstName + " " + middleName + " " + lastName;
    return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
//console.log(fullName("Jimbo", "Jones")); was given 2 arguments but requires 3...
console.log(fullName('Jimbo', 'Jones', 'Tyler'));
function graduate(ninja) {
    return "Congratulations, " + ninja.firstName + " " + ninja.lastName + ", you earned " + ninja.belts + " belts!";
}
var christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
};
var jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
};
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
// console.log(graduate(jay)); I feel like the interface is not being implemented properly
// be cause it said belt not belts
console.log(graduate(jay));
var Ninja = /** @class */ (function () {
    function Ninja(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    Ninja.prototype.debug = function () {
        console.log("Console.log() is my friend.");
    };
    return Ninja;
}());
// This is not making an instance of Ninja, for some reason:
var shane = new Ninja('Mark', 'Schemmer');
// Since I'm having trouble making an instance of Ninja, I decided to do this:
var turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
};
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer) {
    return "Ready to whiteboard an algorithm, " + programmer.fullName + "?";
}
// Now this has problems:
console.log(study(shane)); // it takes type Ninja not type turing.....
var increment = function (x) { return x + 1; };
// This works great:
console.log(increment(3));
var square = function (x) { return (x * x); };
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = function (x, y) { return x * y; };
// Nor is this working:
var math = function (x, y) {
    var sum = x + y;
    var product = x * y;
    var difference = Math.abs(x - y);
    return [sum, product, difference];
};
var Elephant = /** @class */ (function () {
    function Elephant(age) {
        var _this = this;
        this.age = age;
        this.birthday = function () {
            _this.age++;
        };
    }
    return Elephant;
}());
var babar = new Elephant(8);
setTimeout(babar.birthday, 1000);
setTimeout(function () {
    console.log("Babar's age is " + babar.age + ".");
}, 2000);
// Why didn'
