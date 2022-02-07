/*      PRIMITIVE TYPES     */
//strings
"Hello JS";
'Hello JS';

//numbers
10;
"10";
//string
5.7;

5 / 0;
//returns infinity

0 / 0;
//returns NaN

//boolean
true
false

//null
null

//undefined
undefined 

//symbol
Symbol("My Symbol"); 

console.log(Symbol.iterator);

//symbol values are always unique
console.log(Symbol("My Symbol") === Symbol("My Symbol"));
//returns false

/*      REFERENCE TYPES     */

x = {   a:10,
    b: true,
    c: "abc"
}

console.log(typeof(x));
console.log(x);

details={
    Name: "Rishabh",
    Age:"25",
    City:"London"
}

console.log(typeof(details));
console.log(details);
console.log("My Details: ", details.Name);


/*      VARIABLES DECLARATION    */

console.log(a)  
//error as not defined

let a;
console.log(a)
//undefined
a = 20;
var b;
b = true;

const c;
//error SyntaxError Missing initializer in const declaration

const c = 10;
//assign value while declaring

console.log(a, " ", b, " ", c); 
//20   true   10


// declaration
let myString;
// assignment
myString = "Hello";
console.log(myString);
//re-assignment
myString = "World";
console.log(myString);


//Challenge:
const myObject = {};
console.log(myObject);


/*      DYNAMIC TYPING      */
//undefined
let myVariable;
console.log(myVariable); 

//number
myVariable = 10; 
console.log(myVariable); 

//boolean
myVariable = true; 
console.log(myVariable); 

myVariable = {
    x:true,
    y:10
}

//object
console.log(myVariable); 


//Challenge: Vriable reusage

let x = 10;
const y = true;
var myObject = {
    a: x,
    b: y
}

x=20;
var anotherObject = {
    newA: x,
    b: y,
    c: myObject
}

console.log(myObject);
console.log(anotherObject);