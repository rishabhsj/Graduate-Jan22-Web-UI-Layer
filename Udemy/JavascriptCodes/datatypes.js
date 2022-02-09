// language level - JS does not have data types



var x = 10; // JavaSCript infers the data type based on assigned value

console.log("Type inferred for x = ", typeof x);



var str = "hello";

console.log("Type inferred for str = ", typeof str);



var salary = 1034.78;

console.log("Type inferred for salary = ", typeof salary);



var flag = true;

console.log("Type inferred for flag  = ", typeof flag);



function add(a, b) {

  var c = 10;

  return a + b;

}

console.log("Type inferred for add = ", typeof add);

// arrays

var colors = ["RED", "GREEN", "BLUE"];

console.log("Type inferred for colors array  = ", typeof colors);

console.log("Colors array ", colors);

console.log("Length of array colors", colors.length);



// array should have properties & methods

// array -> properties - length

// array -> method - filter(), forEach(), map(), push(), concat()