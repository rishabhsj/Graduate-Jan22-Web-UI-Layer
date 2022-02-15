//1. Write script for following methods of Array object:

const arr = [5, 12, 8, 130, 44];
const word = ['apple', 'cat', 'banana', 'pineapple', 'strawbeery', 'dog'];

//a. Find()
const found = arr.find(element => element > 10);
console.log(found);

//b. Filter()
const result = word.filter(word => word.length > 5);
console.log(result);

//c. Map()
const mapping = arr.map(x => x * 2);
console.log(mapping);

//d. Reduce()
const initialValue = 0;
const sumWithInitial = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(sumWithInitial);

//e. Slice()
console.log(word.slice(-2));
console.log(word.slice(2));

//f. Splice()
word.splice(1, 0, 'Mango');
console.log(word);

//2. Study closure in JavaScript and write script for the same.

function adder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add3 = adder(3);
  var add8 = adder(8);
  
  console.log(add3(2));  
  console.log(add8(2));


// 3. Write a JavaScript function to merge two arrays and removes all duplicates elements
var arr1 = [1, 2, 3]; 
var arr2 = [2, 30, 1, 3]; 

arr1.forEach((element) => console.log(element)) 
function merge_arr(a, b) { 
    var c = b.concat(a); 
    return c.filter((element, index) => { 
    return c.indexOf(element) === index; 
}) 
} 
console.log(merge_arr(arr1, arr2)); 


// 4. Write a pattern that matches e-mail addresses.
// The personal information part contains the following ASCII characters.
// -Uppercase (A-Z) and lowercase (a-z) English letters.
// -Digits (0-9).
// -Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// -Character . ( period, dot or full stop) provided that it is not the first or last character and
// it will not come one after the other.

const pattern = /^[a-zA-Z0-9\/!#^$%_&'=*+?-`{|}~]+[.]*[a-zA-Z-9\/!#^$%_&'=*+?-`{|}~]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/; 


// 5. Write a JavaScript function to get the values of First and Last name of the following form:
// Sample HTML file :
// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Return first and last name from a form -
// w3resource</title>
// </head><body>
// <form id="form1" onsubmit="getFormvalue()">
// First name: <input type="text" name="fname" value="David"><br>
// Last name: <input type="text" name="lname" value="Beckham"><br>
// <input type="submit" value="Submit">
// </form>
// </body>
// </html>

function getValue() { 
    var first_name = document.getElementById("firstname").value; 
   	var last_name = document.getElementById("lastname").value; 
    } 

// 6. Write a JavaScript program to remove items from a dropdown list.
// Sample HTML file:
// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Remove items from a dropdown list</title>
// </head><body><form>
// <select id="colorSelect">
// <option>Red</option>
// <option>Green</option>
// <option>White</option>
// <option>Black</option>
// </select>
// <input type="button" onclick="removecolor()" value="Select and
// Remove">
// </form></body></html>

function removeColoe() {   
    var x = document.getElementById("colorSelect");   
    x.remove(x.selectedIndex);            
}   

// 7. Write a JavaScript program to highlight the bold words of the paragraph, on mouse over a 
// certain link.  
// Test data: 
// Link text is – Click here to highlight bold words.
 
<p id="highlightText" onmouseover="highlight()">Hover Sample Text</p>

function highlight() {
    var x = document.getElementById('highlightText');
    x.style.color = 'yellow';
}
 

// 8. Write a JavaScript function to get the month name from a particular date.  
//                Test Data : 
// console.log(month_name(new Date("10/11/2009"))); 
// console.log(month_name(new Date("11/13/2014"))); 
// Output : 
//   "October" 
//   "November"

function get_month(date) { 
    let monthName = date.toLocaleString("default", { month: "long" }); 
    return monthName; 
} 
    

// 9. Write a JavaScript function to test whether a date is a weekend. Go to the editor
// Note : Use standard Saturday/Sunday definition of a weekend.
// Test Data :
// console.log(is_weekend('Nov 15, 2014'));
// console.log(is_weekend('Nov 16, 2014'));
// console.log(is_weekend('Nov 17, 2014'));
// Output :
// "weekend"
// "weekend"
// Undefined

function weekend(date) { 
    var dt = new Date(date); 
    if (dt.getDay() == 0 || dt.getDay() == 6) { 
    return "weekend"; 
    } 
} 

console.log(weekend('Nov 15, 2014')); 
console.log(weekend('Nov 16, 2014')); 
console.log(weekend('Nov 17, 2014')); 

    
   
// 10.  Write a JavaScript program to display the reading status (i.e. display book name, author name
// and reading status) of the following books.
// var library = [
// {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true
// },
// {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: true
// },
// {
//     author: 'Suzanne Collins',
//     title:  'Mockingjay: The Final Book of The Hunger Games',
//     readingStatus: false
// }];
    
    
library.forEach((book) => {
    console.log(`${book.title} ${book.author} ${book.readingStatus}`)
}); 
    
     

// 11.  Write a JavaScript program to create a Clock.
// Note: The output will come every second.
// Expected Console Output:
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"


function clock() 
  {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  }
  clock.prototype.run = function ()
  {
  setInterval(this.update.bind(this), 1000);
  };
  clock.prototype.update = function () 
  {
  this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  };
  clock.prototype.updateTime = function (secs) 
  {
  this.seconds+= secs;
 if (this.seconds >= 60)
  {
  this.minutes++;
  this.seconds= 0;
  }
 if (this.minutes >= 60)
  {
  this.hours++;
  this.minutes=0;
  }
if (this.hours >= 24)
  {
  this.hours = 0;
  }
};
var clk = new clock();
clk.run();
    


// 12.  Write a JavaScript program to sort an array of JavaScript objects. 
 // Sample Object: 
// var library = [  
//    { 
//        title:  'The Road Ahead', 
//        author: 'Bill Gates', 
//        libraryID: 1254 
//    }, 
//    { 
//        title: 'Walter Isaacson', 
//        author: 'Steve Jobs', 
//        libraryID: 4264 
//    }, 
//    { 
//        title: 'Mockingjay: The Final Book of The Hunger Games', 
//        author: 'Suzanne Collins', 
//        libraryID: 3245 
//    }];
    
function sortLibrary(library) {
    library.sort((a, b) => {
        return a.libraryID - b.libraryID;
    });

    for (let i = 0; i < library.length; i++) {
        console.log(library[i].title);
        console.log(library[i].author);
        console.log(library[i].libraryID);
    }
}

   
// 13.  Study Promises in JavaScript and provide script for the same. 
   
    const testPromise = new Promise((resolve, reject) => { 
    setTimeout(() => { 
    return x ? resolve(`x: ${x}`) : reject("x not found"); 
    }, 10000); 
    
    }); 
    
    testPromise 
    .then((val) => { 
    console.log(val); 
    }) 
    
    .catch((error) => { 
    console.log(error); 
    }); 
   




