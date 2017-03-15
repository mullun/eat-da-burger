//Import MySQL connection
var connection = require("./connection.js");

// Helper functions for SQL syntax
// print a series of question marks in query string
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i ++){
		arr.push("?");
	}
	// return a string
	return arr.toString();
};

//Helper function for SQL Syntax
// make object into SQL string
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (Object.hasOwnProperty.call(ob, key)) {
			arr.push(key + "=" + ob[key]);
		}
	}

	return arr.toString();
};

// Object for all SQL operations
var orm = {
	// table = name of table; cb = callback function
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function (err, result){
			if (err) {
				console.log("error selecting from db");
				return;
			}
			cb(result);
		});
	},

	// table = name of table; cols = array of columns, vals = array of values; cb = call back function
	insertOne: function(table, cols, vals, cb){
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);
		console.log(cols);
		console.log(vals);
		connection.query(queryString, vals, function(err, result){
			if (err) {
				console.log("error inserting values");
			}
			cb(result);
		});
	},
	// An example of objColVals would be {burger_name: BigMac, devoured: true}
	updateOne: function(table, objColVals, condition, cb){
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result){
			if (err) {
				console.log("error updating table");
				return;
			}
			cb(result);
		});
	},

	delete: function(table, condition, cb){
		var queryString = "DELETE FROM " + table;
		queryString += " WHERE ";
		queryString += condition;
		console.log(queryString);

		connection.query(queryString, function(err, result){
			if(err){
				console.log("error deleting from table");
				return;
			}
			cb(result);
		});
	}
};

// Export the orm object for the model
module.exports = orm;