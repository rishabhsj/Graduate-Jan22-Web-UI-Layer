const { response } = require("express");

//load the pg module
const Pool = require("pg").Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dbrestapi',
  password: 'root',
  port: 5432,
});
console.log(pool);

function getUsers(req, res) {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        // console.log(results);
        if (error) {
            //throw error
            return res.status(500).send("Intrnal Serveer Error");
        }
        else
            return res.status(200).json(results.rows);
    });
}

//getUsers();
module.exports = { getUsers };
// module.exports = pool;
