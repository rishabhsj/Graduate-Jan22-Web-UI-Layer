//Arithmetic Operators

let a,b;
a = 1;
b = 2;

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log(a-b);

a = "abc";
b=5;

console.log(a+b); //abc5
console.log(a*b); //nan
console.log(a/b); //nan
console.log(a-b); //nan

a= "Hello";
b = "World";

console.log(a+b); //concat

//Unary Plus
let c = "1";
console.log(+c); //converts string to number
c = 1;
console.log(Number(c)); //same result

//Unary minus 
c = "5";
console.log(-c); // string to number reversed -5

//++
let d =5;
++d;
console.log(d); //6

d++;
console.log(d); //7

console.log(++d); //8 first increments then returns

console.log(d++); //8 (not incremented) first returns then increments

console.log(d); //9 because in previous example first returns value then increments

console.log(d--); //9

console.log(d); //8

console.log(--d); //7

//comparison operators always return true or false
a = 5;
b = 7;

console.log(a < b); 
console.log(a > b);
console.log(a <= b);
console.log(a >= b);

let str1, str2;
str1 = "abc";
str2 = "bcd";
str3 = "Bcd";

console.log(str1 > str2); //false compares alphabetical order for each index
console.log(str1 > str2); //true
console.log(str1 > str3); //true as upper case letters come first
console.log(str2 == str3); //false

//Equality operators

let myStr = "0";
let myNum = 0;
let myBool = false;

console.log(myStr==myNum); //true compares only values not types
console.log(myBool==myNum); //true
console.log(myStr==myBool); //true

console.log(myStr===myNum); //false compares values and types
console.log(myBool===myNum); //false
console.log(myStr===myBool); //false

console.log(null===undefined); //false
console.log(null==undefined); //true

console.log(0 === "" === null === undefined === false); //true  executed left to right so last comparison will be false to false and will return true

//Logical Operators and or not

//or
console.log(true || false); //true
console.log(false || true); //true

console.log("abc" || ""); //abc
console.log("" || "abc"); //abc
console.log("" || ""); //returns empty string

let city;
const defaultCity = "New York";

let myCity = city || defaultCity;
console.log(myCity); //New York

city = "Aberdeen";
myCity = city || defaultCity; //returns first true operand
console.log(myCity); //Aberdeen

//and
console.log(true && false); //false
console.log(false && true); //false

console.log("abc" && ""); //empty string
console.log(false && ""); //false returns first falsy
console.log("" && false); //empty string returns first falsy
console.log("abc" && "xyz"); //xyz returns last truthy 

//not
console.log(!"abc"); //false
console.log(!""); //true
console.log(!0); //true
console.log(!undefined); //true
console.log(!false); //true
console.log(!true); //false
console.log(!!true); //true

//Operators precedence
console.log(2+4*10); //42
console.log((2+4)*10); //60 

a = 1;
a = a+5; //a=6

//Operators Associativity
let x, y;
x=3;
y = x = 5;
console.log(x,y); // 5 5 right to left associativity

console.log(5 * 10 / 2); //25 left to right
console.log(5 * 10 / 2 / 5); //5 left to right



/*
//Challange 1
let myVar1 = 10;
let myVar2 = "50";
if(Number(myVar1)<=Number(myVar2)){
    console.log(true);
} else {
        console.log(false);
}

//udemy solution
console.log(+myVar1 <= +myVar2);

// Challange 2
let myNum1 = 10;
let myNum2 = 3;
console.log(myNum1%myNum2);

//Challange 3
console.log(3 || true && null || false); //3
// step 1: true && null -> null
// step 2: 3 || null -> 3
//step 3: 3 || false -> 3

//Challange 4
a = 10

// a = a + 1;
a += 1;
console.log(a);

// a = a * 2;
a *= 2;
console.log(a);

// a = a-5;
a -= 5;
console.log(a);

// a = a/2;
a /= 2;
console.log(a);

*/