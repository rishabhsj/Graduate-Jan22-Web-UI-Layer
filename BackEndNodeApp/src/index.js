const express = require("express");

//console.log(express);

// app will create a web server

const app = express();
// /- means base url
app.get('/', function (req, res) {
    res.send("Hello World");
});

// Route -http://localhost:3000/welcome?name=rishabh
// response - Welcome User Name

app.get('/welcome', function (req, res) {
    res.send("Welcome to web App " + req.query.name);
});


//route - /city/name/cityname
app.get('/city/name/:cityname', function (req, res) {
    res.send("The city is  " + req.params.cityname);
});

app.get("/users/:id/skill/:skill", function (req, res) {

    let id = req.params["id"];
  
    let skill = req.params["skill"];
  
    console.log(`${id} : ${skill}`);
  
    // JSON.stringify({})
  
    res.json({ userId: id, userSkill: skill });
  
  });

// Route POST Method
app.post("/users", function (req, res) {

    res.send("Post Method Response");
  
  });

// Route PUT Method
app.put("/users", function (req, res) {

    res.send("Put Method Response");
  
});
  
// Route DELETE Method
app.delete("/users", function (req, res) {

    res.send("Delete Method Response");
  
});
  


const port = 3000;

app.listen(port, function () {

  console.log("Web Server started successfully");

});