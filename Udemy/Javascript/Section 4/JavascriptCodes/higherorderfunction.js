function calc(num1, num2, callbackfn)
{
    var result = callbackfn(num1, num2);
    console.log(result);
}


//function add() { }

var add = (a, b) => { return a + b }; //if single statement we can skip eturn keuword and curly braces

//invoking calc function
calc(10, 20, add);

//invoking calc function again
var substract = (a, b) => a - b;
calc(10, 20, substract);

//invoking calc function again
var mult = (a, b) => a * b;
calc(10, 20, mult);

//invoking calc function again
var divide = (a, b) => a / b;
calc(10, 20, divide);

//invoking calc function again
var addstr = (a, b) => a + b;
calc('hello', 'world', addstr);

/*
//invoking calc function again
var numsqr = (a, b) => {
    return a * a,  b * b;
};
calc(10, 20, numsqr);

//invoking calc function again
var numcube = (a, b) => {
    return a * a * a,  b * b * b;
};
calc(10, 20, numcube);
*/

//power of num
var numpower = (a, b) => a ** b;
calc(2, 3, numpower);

//square of num
var square = (a) => a * a;
calc(10, 20, square);


calc(10, 20, (a, b) => { return a * b; });
