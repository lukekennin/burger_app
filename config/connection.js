const mysql = require("mysql");
var connection;



if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "kavfu5f7pido12mr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "isj87mzpcpeu07i8",
    password: "gekb6jdep1mk3p6z",
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
