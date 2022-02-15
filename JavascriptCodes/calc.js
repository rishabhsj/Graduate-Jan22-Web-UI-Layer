var my_num;
console.log( my_num);
my_num = my_num + 10;
console.log("num", my_num);

// output: num NaN

console.log(parseInt("10"));
console.log(parseInt("10.00"));
console.log(parseInt("10.33"));
console.log(parseInt("34 45 66"));
console.log(parseInt(" 60 "));
console.log(parseInt("40 years"));
console.log(parseInt("He was 40"));


let x = Math.PI;
let y = Math.sqrt(16);
let z = Math.max(10, 30, 20);
console.log(x, y, z)

var today = new Date();

console.log(today);

// date passed as string

let ms = Date.parse("March 21, 2012");

console.log("Time difference between 1970 to 2012 - ", ms);



// Calculate milliseconds in a year

const minute = 1000 * 60;

const hour = minute * 60;

const day = hour * 24;

const year = day * 365;



let years = Math.round(ms / year);

console.log("years in between  - ", years);