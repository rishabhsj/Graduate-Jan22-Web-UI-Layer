const person = {};



person.firstName = "John";

person.lastName = "Doe";

person.age = 50;

person.eyeColor = "blue";

// arrow function style



person.print = function () {

  console.log("I am Person object");

};



// Normal function

person.details = function () {

  console.log(this.firstName, "-", this.age);

};



console.log(person.eyeColor);

person.print();

person.details();

console.log(person.toString());



// the address of person object is copied into variable x

const x = person;



x.details();



x.firstName = "Jill";

// object properties are mutable

console.log("After updating object properties");

person.details();

x.details();


// custom object based on functon template

// objects created using function syntax

// function using this operator - constructor method

function Account(accountNumber, holderName, balance) {

    this.accountNumber = accountNumber;
  
    this.holderName = holderName;
  
    this.balance = balance;
  
  }
  
  
  
  // Create the object
  
  var acc1 = new Account(100, "John", 79054);
  
  var acc2 = new Account(200, "Jill", 4000); // call to the constructor function
  
  
  
  console.log(`${acc1.accountNumber} : ${acc1.holderName} : ${acc1.balance}`);
  
  console.log(`${acc2.accountNumber} : ${acc2.holderName} : ${acc2.balance}`);