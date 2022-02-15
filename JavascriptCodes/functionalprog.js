var arr = [10, 20, 30, 40];

//normal 
for (let x of arr) {
    console.log(`${x}`);
}
  
//functional programming - de clarative approach
//advantages- compact, simple, cleaner
arr.forEach((x) => { console.log(`${x} - ${x * 10}`) });


// use functional prog to print values from array in uppercase

var arrString = ["john", "jill", "jack"];

arrString.forEach((word) => { console.log(word.toUpperCase())});
