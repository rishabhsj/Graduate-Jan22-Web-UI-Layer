//load the express module
const express = require("express");

const body_parser = require("body-parser");

const db = require("./db");
console.log(db);


//get the app object from express()
const app = express();

//create an array for managing user object
const users = [

    { userId: 1, name: "John", age: 23 },
    
    { userId: 2, name: "Jill", age: 25 },
    
    { userId: 3, name: "Jack", age: 21 }
    
];
    



// add middle ware
const logger = function (req, res, next) {
    
    console.log("Logged URL", req.body);
    next();
};


// Add middleware

app.use(body_parser.json());

app.use(logger);

app.use(function (req, res, next) {

  console.log("Next Middleware called..");

  next();

});


// 1. web api end point
// /users returns array of json object
app.get('/users', function (req, res) {
    
    return res.status(200).json(users);
});


app.get("/users", (req, res) => {
    // console.log("/users  - request received");  //return res.status(200).json(users);  // add the database code here..  
    db.getUsers();
});

app.get("/users", db.getUsers);


// 2. Web API endpoint
// /users/{id} Return the JSON object in response
app.get("/users/:id", function (req, res) {

    const user = users.find(u => u.userId === parseInt(req.params.id));
    
    if (!user) {
    return res.status(404).send("The user could not be found");
    
    }
    return res.status(200).json(user);
    
    });



// 3. Web API endpoint
// /users
// Accept JSOn object in request
// Return new created object in response
app.use(express.json());
app.post("/users", (req, res) => {
    if (!req.body.name || !req.body.age) {   
    return res.status(400).send("Could not find appropriate details!");
    } 
    const user = {
    userId: users.length + 1,
    name: req.body.name,
    age: req.body.age
    };
    
    users.push(user);
    res.status(200).json(user);
    });


// assign port to the server
const port = 3000;

app.listen(port, function () {

  console.log(`Web Server started successfully ${port} `);

});



