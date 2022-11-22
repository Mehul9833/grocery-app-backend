const mongoose = require("mongoose");
const grocerySchema = new mongoose.Schema({
	text: {
		type: String,
		require: true,
	},
	isPurchased: {
		type: Boolean,
		require: true,
	},
});

module.exports = mongoose.model("Grocery", grocerySchema);
