// local function
// declaration of function
function nameInUpperCase(str)
{
// every string value in JS is treated as string object
    return str.toUpperCase();
}
// invocation of function
var result = nameInUpperCase("hello");
console.log(`value is ${result}`);


// local function expression

var vfn = function () {

    console.log("I am a function expression");
  
  };
  
vfn();
  

// print square of a number

var square = (x) => {

    console.log("within square");
  
    return x * x;
  
  };
  
  console.log(`square of 10 = ${square(10)}`);
  
  
  
  // { return } can be optional in arrow function
  
  var cube = (x) => x * x * x;
  
console.log(` Cube of 3 =    ${cube(3)}`);
  

// arrow function to return "<<string>> 2022"

var arrow = (a) => "Hello 2022";

console.log(`arrow function is  ${arrow()}`);

// arrow function to return given string in uppercase

var arrow1 = (a) => a.toUpperCase();

console.log(`to upper case:  ${arrow1("lower to upper")}`);