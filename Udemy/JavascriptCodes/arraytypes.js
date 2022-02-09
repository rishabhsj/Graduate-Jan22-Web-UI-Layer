var arr = [10, 20, 30, 40];

// traditional for loop

// i++ i = i + 1

for (let i = 0; i < arr.length; i++) {
  console.log("arr[", i, "] = ", arr[i]);
  //console.log(`arr[${i}] = ${arr[i]}`);

}



// routing : http://localhost:4200/employees/${id}

// for in loop

// x returns index number starting from 0 till n-l

for (let x in arr) {
  console.log(`${x} - ${arr[x]}`);

}

// for in - can also be used with objects

var person = {
  id: 100,
  name: "John",
  age: 34,

};



// iterate over the properties of object

// x returns id, name, age

for (let x in person) {

  //console.log(x);

  console.log(` ${x} - ${person[x]}`);

}


// for-of loop
console.log("for-of loop : ");
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
  console.log(text);
}

