/*

var x = 10; // local to the complete code



function message(range) {

  var j = 20; // local to function - scope within the function

  for (var i = 1; i <= range; i++) {

    // i - scope within the function

    console.log("i=" + i + "-" + "hello");

  }

  console.log("outside loop - " + i);

  console.log("j = " + j);

  console.log("x =" + x);

}



message(5);

console.log("x =" + x);

//console.log("j =" + j);

//console.log("i =" + i);

*/


//g = 10; //global variable

var x = 10; // local to the complete code



function message(range) {

  var j = 20; // local to function - scope within the function

  for (let i = 1; i <= range; i++) {

    // i - scope within the function

    console.log("i=" + i + "-" + "hello");

  }

  // console.log("outside loop - " + i);

  console.log("j = " + j);

  console.log("x =" + x);

}



message(5);

console.log("x =" + x);

//console.log("j =" + j);

//console.log("i =" + i);