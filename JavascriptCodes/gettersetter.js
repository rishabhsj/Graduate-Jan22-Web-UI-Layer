class Account {
    #accountNumber;
    #holderName;
    #balance;
    #count;

    static instantceCounter = 0;
    constructor(accountNumber, holderName, balance) {
      this.#accountNumber = accountNumber;
      this.#holderName = holderName;
      this.#balance = balance;
      this.constructor.instantceCounter++;
  
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
  
  get count() {
      return this.#count;    
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


console.log("Number of Objects:", Account.instantceCounter);

console.log(`${acc1.accountNumber} : ${acc1.holderName} : ${acc1.balance}`);
console.log(`${acc2.accountNumber} : ${acc2.holderName} : ${acc2.balance}`);

console.log("Type of acc1 - ", typeof Account);

console.log("**************************");

acc1.withdraw(6000);
acc1.withdraw(500);
acc2.deposit(50);


acc1.print();

acc2.print();



console.log("-------");

//test update the holdername

acc1.holderName = "Jack"; //won't get updated

//use setter method

acc1.accountHolderName = "Jack";

acc1.balance = 5;

acc1.print();