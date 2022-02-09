//simplest function in JS
function myFunc(){};
console.log(myFunc); //prints [Function: myFunc]
console.log(myFunc());  //returns undefined
 
//function with parameters
function myFunction(a,b){
    console.log(a, b)
};

myFunction(10,5); //prints 10 5
console.log(myFunction(10,5)); //prints 10 5 and undefined
myFunction(); //prints undefined undefined but still works
myFunction("abc"); //prints abc and undefined as second parameter is not parsed

//function scope
function newFunction(a,b){
    console.log(a,b);
}
console.log(myFunction(3,2));

// console.log(a); error as parameters can't be accessed outside the function

//reuse parameters names
//parameters with same names can be used in different functions
function func(a,b){
    console.log(a,b);
};
function func2(a,b){
    console.log(a,b);
};
func(2,3); //prints 2 3
func2(5,7); //prints 5 7
const a = null;
const b = true;
console.log(a, b); //prints null true as parameter names can be used as const outside the function

//function returning a value
function sum(a,b){
    return a+b;
}
console.log(sum(10,5)); //returns 15
console.log(sum("abc",5)); // prints abc5
console.log(sum()); //prints undefined


/*
//Challange 1

function mult(a,b,c){
    let result = a*b*c;
    console.log(result);
}

mult(1,2,7);

//Challange 2
function concatenateStrings(s1,s2){
    return s1 + " "+s2;
}

console.log(concatenateStrings("hello", "world"));

//Challange 3
function outerFunction(a,b){
    function innerFunction(num){
        return num*num;
    }
    let sum = a+b;
    let result = innerFunction(sum);
    console.log(result);
}

outerFunction(1,2);
outerFunction(2,3);
outerFunction(3,7);
// innerFunction(2,5); --> would return undefined as inner function is defined inside the outer function


*/