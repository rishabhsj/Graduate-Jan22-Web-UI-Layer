// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     console.log("it works");
//   }
// });
// server.listen(3000);
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const config = require("config");
const helmet = require("helmet");
const morgan = require("morgan");
const Joi = require("joi");
const logger = require("./middleware/logger");
const courses = require("./routes/courses");
const home = require("./routes/home");
const express = require("express");
const app = express();

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log("app env: " + app.get("env"));

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.use(helmet());
app.use(logger);
app.use("/api/courses", courses);
app.use("/", home);

//Configuration
console.log("App Name: " + config.get("name"));
console.log("Mail server: " + config.get("mail.host"));
console.log("Mail password: " + config.get("mail.password"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled...");
}

//db work
dbDebugger("Connected to db...");

// app.get("/", (req, res) => {
//   res.send("Hello World!!!");
// });

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(course, schema);
}
