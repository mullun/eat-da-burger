// Set up MySQL connection.
var mysql = require("mysql");

// var portVar = process.env.PORT || 3006;

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers_db"
});

// Make connection.
connection.connect(function(err){
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	} else {
		console.log("connected as id " + connection.threadId);
	}
});

// Export connection for ORM to use.
module.exports = connection;