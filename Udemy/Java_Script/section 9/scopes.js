//Global Scope

//all of below have a global scope even though some of them can't be accessed through global.property
a = 5;
let b = 10;
console.log(global.a); //prints 5
console.log(global.b); //undefined

const c = "abc";
console.log(global.c); //undefined

function myFunc(a){
    console.log(a);
    console.log(b);
}

console.log(global.myFunc); //undefined
myFunc(); // prints undefined and 10 as a was an argument name so is treated as a local variable

//Function scope
let e; //global scope but no value assigned

function myFunction(a, b){
    const x = true;
    console.log(x); //true
    // console.log(d); //refference error as no variable d defined in local scope nor in global scope
    console.log(e); //undefined cause no value assigned but declared in global
    console.log(a,b); //values of parameters a and b
}

myFunction(); 
myFunction(15, 4); 

// console.log(x);//Reference error as accessing local variable in global scope

//parameters of the function are also local to the function
console.log(a); //prints 5 as this was a value of global variable called a

//SCOPE CHAIN
function sum(a,b){
    function mult(a,b){
        return a*b; //uses parameters passed to sum as passed to mult as parameters
    }
    console.log(mult(a,b)); //prints 50 
    return a + b; //uses parameters passed to sum
}

const result = sum(10,5); //prints 15
console.log(result);

const p = 2;
function sum2(a,b){
    const p = 3;
    function mult(a,b){
        return a*b*p; //uses parameters passed to sum as passed to mult as parameters and p from sum2
    }
    console.log(mult(a,b)); //prints 50 
    return a + b; //uses parameters passed to sum
}

const result2 = sum2(10,5); //prints 15
console.log(result2);

//STRICT MODE 
function test(){
    'use strict';
    u = 10; //will throw an error
    console.log(u);
}

// test();  //if called error is thrown


/*
//Challange 1
const b = 2;
let d = 15;

function myFn1(a){
    let b;
    let d = 10;
    myFn2(b);
}

function myFn2(a){
    let c = 5;
    console.log(a, b, c, d);
}

myFn1(); //undefined, 2, 5, 15

//challange 2

function myFunc(){
    "use strict";
    a = 2;
    return a;
}

// myFunc(); //will throw an error

//FIX
function myFuncFixed(){
    "use strict";
    let a = 2;
    return a;
}
myFuncFixed();

//Challange 3
//what will get in console?
setTimeout(function myFn(){
    console.log("Hello from myFn function");
}, 2000);

// myFn(); //error undefined

*/