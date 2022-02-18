const Pool = require("pg").Pool;

// database connection
const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "api",
  password: "root",
  port: 5432,
});

const getUsers = (req, res) => {
  console.log("connecting to database");
  db.query("SELECT * FROM users", (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result.rows);
  });
};

// database query to fetch data based on users id
// request object can read data from URL
const getUsersById = (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM users where id=$1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result.rows);
  });
};

// database query to insert new record in the table
// request object can read data from HTTP request body
const postUsers = (req, res) => {
  const newPost = req.body;
  const email = newPost.email;
  const password = newPost.password;
  db.query(
    "INSERT INTO users(email, password) values($1, $2)",
    [email, password],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(201).json({ message: "New User added" });
    }
  );
};

// module.exports will export object with function
module.exports = { getUsers, getUsersById, postUsers };
