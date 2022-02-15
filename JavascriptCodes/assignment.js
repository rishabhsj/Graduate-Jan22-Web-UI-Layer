//count the number of the objects created

class Account {
    #accountNumber;
    #holderName;
    #balance;
 

    static count = 0;
    constructor(accountNumber, holderName, balance) {
      this.#accountNumber = accountNumber;
      this.#holderName = holderName;
      this.#balance = balance;
      Account.count = Account.count + 1;
  
    }

//getter and setter methods

get accountHolderName() {
    return this.#holderName;

  }

  set accountHolderName(name) {
    this.#holderName = name;

  }

  get accountHolderNumber() {
    return this.#accountNumber;

  }
   
  set accountHolderNumber(number) {
    this.#accountNumber = number;

  }

  get balance() {
    return this.#balance;

  }

  set balance(amt) {
    this.#balance = amt;

  }

  print = function () {
    console.log(`${this.#accountNumber} : ${this.#holderName} : ${this.#balance}`);

    };
    
     //deposit method

  deposit = function (amount) {
    this.#balance += amount;

  };

  //withdraw method

  withdraw = function (amount) {
    if (this.#balance - amount >= 0) {
      this.#balance -= amount;

    } else {

      this.#balance = this.#balance;
      console.log("Not enough funds");

    }

    };
    
   }

var acc1 = new Account(100, "John", 5000);
var acc2 = new Account(200, "Jill", 8000); //call to constructor function

console.log(`${acc1.accountNumber} : ${acc1.holderName} : ${acc1.balance}`);
console.log(`${acc2.accountNumber} : ${acc2.holderName} : ${acc2.balance}`);

console.log("Type of acc1 - ", typeof Account);
console.log("Number of Objects:", Account.count);



// Functional programming to convert array in Uppercase
var arrString = ["john", "jill", "jack"];

arrString.forEach((word) => { console.log(word.toUpperCase())});
