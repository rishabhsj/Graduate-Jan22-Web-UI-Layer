// Objects - {}

var person = {

    id: 100,
  
    name: "John",
  
    age: 34,
  
  };
  
  
  
  console.log("The type for person  - ", typeof person);
  
  // ES6 : string template syntax
  
  console.log(
  
    ` Person details - ${person.id}  :  ${person.name}  : ${person.age} `
  
);
  

//



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



