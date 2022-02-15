//ES6 Format
class Account{
    // # :  means private - works only with class 
//accountNumber;
//holderName;
//balance;

    constructor(accountNumber, holderName, balance) {

    this.accountNumber = accountNumber;
  
    this.holderName = holderName;
  
    this.balance = balance;
  
  }
  
  
  
  print = function () {
  
    console.log(`${this.accountNumber} : ${this.holderName} : ${this.balance}`);
  
  };
  
  
  
  // deposit method
  
  deposit = function (amount) {
  
    this.balance = this.balance + amount;
  
  };
  
  
  
  // withdraw method
  
  withdraw = function (amount) {
  
    this.balance -= amount;
  
  };
  
  
} //closing of class

  // Create the object
  
  var acc1 = new Account(100, "John", 79054);
  
  var acc2 = new Account(200, "Jill", 4000); // call to the constructor function
  
  console.log(`${acc1.accountNumber} : ${acc1.holderName} : ${acc1.balance}`);

console.log(`${acc2.accountNumber} : ${acc2.holderName} : ${acc2.balance}`);



console.log("Type for acc1 = ", typeof Account);



acc1.print();

acc2.print();



console.log("deposit method");

acc1.deposit(200);

acc1.print();



console.log("withdraw method");

acc1.withdraw(500);

acc1.print();