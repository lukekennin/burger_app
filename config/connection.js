const mysql = require("mysql");
var connection;



if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "gk90usy5ik2otcvi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "h5n20k45x08c9e9g",
    password: "g8qobiqr9bekzbvb",
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
