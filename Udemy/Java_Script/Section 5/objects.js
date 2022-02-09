/* Objects */
let myObject;
myObject = {
    a:10,
    b: "abc"
}

console.log(myObject);

myObject.a = 15;

console.log(myObject);

myObject.c = true;

console.log(myObject);

delete myObject.b;

console.log(myObject);

console.log(myObject.a);

// Challange 1

let myPost = {};

myPost.postTitle = "Object is refference type"; 
myPost.postLikes = 0;
myPost.shared = false;

console.log(myPost);

myPost.postLikes ++;
delete myPost.shared;

console.log(myPost);

//Use const for object declaration

const myObj = {};
// myObj = {   // returns error
//     a:true
// };
myObj.a = true; //no error as variable is not re-assigned
console.log(myObj); 

//Challange 2
let mO = {
    a :10
}

console.log(mO);

let mOcopy = mO;
mOcopy.b = false;

console.log(mOcopy);
console.log(mO);

// Bracket notation
let anotherObject = {
    a:true,
    b: null,
    c: 25
};

console.log(anotherObject["a"]);

const properName = "c";

console.log(anotherObject[properName]);

//create property name dynamically
anotherObject["new" + "Property" + "Name"] = "Value for dynamically created property";
console.log(anotherObject);

//missing properties

const missingObject = {
    a: 3,
    b: true
}

console.log(missingObject.c); //returns undefined code execution is not stopped
missingObject.newProperty = undefined;
console.log(missingObject.newProperty); //returns undefined code execution is not stopped

//How do we then tell is property missing or is property there but has a value undefined?
//DON'T USE undefined AS A VALUE NEVER EVER; use NULL insted

//CHALLANGE 3
let objectWithNest = {};
objectWithNest.nestedObject = {};
objectWithNest.nestedObject.a = null;
name = "b";
objectWithNest.nestedObject[name] = true;
console.log(objectWithNest);


