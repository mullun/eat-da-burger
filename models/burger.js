
var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	create: function(cols, vals, cb){
		orm.insertOne("burgers", cols, vals, function(res){
			cb(res);
		});
	},

	update: function(objColsVals, condition, cb) {
		orm.updateOne("burgers", objColsVals, condition, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb) {
		orm.delete("burgers", condition, function(res){
			cb(res);
		});
	}
};

// Export the database functions for the controller
module.exports = burger;