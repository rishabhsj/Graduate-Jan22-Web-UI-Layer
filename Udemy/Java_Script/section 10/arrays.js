//EMPTY ARRAY
const arr = [];
console.log(arr);
console.log(arr.length);

//Add elements to array
arr[0] = "First Element";
console.log(arr);
console.log(arr.length);

arr[1] = "2nd Element";
console.log(arr);
console.log(arr.length);

arr.push("3rd Element");
console.log(arr);
console.log(arr.length);

//Modify Elements
const arr2 = [3, true, "abc", {}];
console.log(arr2);
console.log(arr2.length);

arr2[1] = "New val for 2nd element";
console.log(arr2);
console.log(arr2.length);

arr2[0] = null;
console.log(arr2);
console.log(arr2.length);

arr2[3].newProp = 10;
console.log(arr2);

console.log(arr2[3].newProp);
console.log(arr2[3]["newProp"]); //using square brackets notation property name needs to be in quotation; for numeric property names use only this notation

const arr3 = [1,2];
// console.log(arr3.0); //error

//Delete elements
const arr4 = [true, null, 1, 2, "abc"];
console.log(arr4);
console.log(arr4.length);

delete arr4[2]; // array still has 5 elements but element at index 2 is empty
console.log(arr4);
console.log(arr4.length);

console.log(arr4[2]); //undefined

arr4.pop(); //len 4 last element removed
console.log(arr4); 
console.log(arr4.length);

arr4.shift() //len 3 first element removed
console.log(arr4); 
console.log(arr4.length);

//Compare arrays
const myArray = [1,2,3];
const myArray2 = new Array(1,2,3);

myArray==myArray2?console.log("true"):console.log("false"); //false cause different pointers

const myArrayCopy = myArray;
myArray===myArrayCopy?console.log("true"):console.log("false"); //true cause point to the same object

myArray.toString()===myArray2.toString()?console.log("true"):console.log("false"); //true cause comparing 2 strings works if order of elements in both arrays is the same
console.log(myArray.toString());




/*
//Challange 1
//Add elements at the beggining of the array

const myArray = [true,null];
myArray.unshift("hello");
myArray.unshift(100);
console.log(myArray);

//Challange 2
//Add element at specific index
//Answer: array length will be 11

const myArr = [1,2];
myArr[10] = "abc";
console.log(myArr); // [ 1, 2, <8 empty items>, 'abc' ]
console.log(myArr.length);

//Challange 3
//Array with 3 objects. add one more object to array

const arrayOfCars = [{carBrand:"BMW", price: 30000}, {carBrand:"Mazda", price:50000}, {carBrand:"Fiat", price:10000}];
arrayOfCars.push({carBrand:"Audi", price: 35000});
console.log(arrayOfCars);

*/