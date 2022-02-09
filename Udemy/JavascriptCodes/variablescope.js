/* function anon() {
console.log("welcome to java");
}

anon();

*/

/* Everything in JS is a function.

// is for comemmenting line

*/
/*
// global variables
g = 10;

//local variable
var i = 20;


function call() {
    console.log(" g is :", g);
    console.log(" i is :", i);

}
//invoking a function
call();

g = g + 10;


var i = "hello";
console.log(g, i);

*/

function add(num1, num2)
{
    var sum;
    sum = num1 + num2;
    return sum;
}

var result =add(10, 20);
console.log(result);
console.log(add(10, 20));