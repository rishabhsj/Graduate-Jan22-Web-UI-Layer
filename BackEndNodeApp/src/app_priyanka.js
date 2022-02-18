// load the express module
const express = require("express");
const body_parser = require("body-parser");

// get the app object from express()
const app = express();

// Create an array for managing user object
const users = [
  { userId: 1, name: "John", age: 23 },

  { userId: 2, name: "Jill", age: 24 },

  { userId: 3, name: "Jack", age: 21 },
];

const logger = function (req, res, next) {
  console.log("Logged URL " + req.body);
  next();
};

// Add middleware
app.use(body_parser.json());
app.use(logger);
app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

// Routing Paths
// 1. Web API endpoint
// /users  Returns array of JSON object
app.get("/users", (req, res) => {
  console.log("/users  - request received");
  return res.status(200).json(users);
});

// 2. Web API endpoint
// /users/{id} Return the JSON object in response
// logic compare the id sent in request with array objects
app.get("/users/:id", (req, res) => {
  console.log("within get method" + req.params.id);
  const user = users.find((u) => u.userId === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("The user could not be found");
  }
  return res.status(200).json(user);
});

// 3. Web API endpoint
// /users
// Accept JSOn object in request
// Return new created object
// array.push()
app.post("/users", (req, res) => {
  //console.log(req.body);
  console.log("/users  - request received");
  const user = {
    userId: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(user);
  res.status(201).json(user);
});

// assign port to the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server start at port ${port} `);
});
