//EXPRESSIONS
10
"abc"
5 + 3

// function(a){
//     console.log(a);    ---> error
// }

;(function(a){
    console.log(a);    //no error but add semicolon before opening bracket otherwise it will throw an error
})

;(function(){
    console.log("this is ok");   
})()  //immediately invoked function expression ---- will print "this is ok"

let a;
a = 10 //assignment expression

console.log(a);

// 5 = true  // SyntaxError: Invalid left-hand side in assignment

4 <=10 <=20 || 5 // Logical Expression no error returns true

//STATEMENTS
let b; //variable declaration is a statement
b = 3
console.log(b); //prints 3

function myFunc(c){
    return c;
}

myFunc(b) //returns 3

if(true){
    console.log("This is if statement"); //after block of statements semicolon is not required
}

// console.log(if(true){
//     console.log("This is if statement"); //error SyntaxError: Unexpected token 'if'; if is a statement not expression therefore cant be passed as argument in a console.log function
// });

//EXPRESSION STATEMENTS
console.log(4+3);  //using semicolon expression console.log was turned into statement

// console.log(console.log(4+3);); //error

console.log(console.log(4+3)); // works returns undefined as console.log function always returns undefined

a = 5; //assignment expression turned into expression statement

true; //expression statement no error

// console.log(true;); //error

console.log(true); //no error


/*
// //Challange 1
const myObj = {
    x: 10,
    y: true
};

console.log(delete myObj.x); //expression as no error delete operator is used in expressions
delete myObj.x; //expression statement


//Challange 2
//what will be logged to the console?
function fn(){
    console.log("Greeting from 'fn' function");

    return function(a){
        console.log(a);
    };
}

fn() //expression
(true) //  in console  "Greeting from 'fn' function" and true as (true) is here an argument that is parsed to the inner function

fn(); // in console  "Greeting from 'fn' function" inner function is ignored
(true) // parenthesis here is a grouping operator will return true

//Challange 3
//Why semicolon is added

function firstFunc(a,b){    //no semicolon as block of statements
    return a+b;
}

const secondFunc = function(a, b) {     //semicolon as statement variable declaration is a statement; here function is assigned as value during the declaration
    return a+b;
};

*/