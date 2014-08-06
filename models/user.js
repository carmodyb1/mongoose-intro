var mongoose = require("mongoose")


// Mongoose.model defines a constructor object that 
// cooresponds with a collection in the database


var User = mongoose.model("User", {
// key:  arbitrary name for that property
// value:  constructor that indicates the type
	// _id: mongoose.Schema.Types.ObjectId,
	email: String
}) 


module.exports = User;



