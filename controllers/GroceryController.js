const GroceryModel = require("../models/GroceryModal");

module.exports.getGrocery = async (req, res) => {
	const grocery = await GroceryModel.find();
	res.send(grocery);
};

module.exports.saveGrocery = async (req, res) => {
	const { text, isPurchased } = req.body;

	GroceryModel.create({ text, isPurchased }).then((data) => {
		console.log("Added Successfully");
		console.log(data);
		res.send(data);
	});
};

module.exports.updateGrocery = async (req, res) => {
	const { _id, isPurchased } = req.body;
	GroceryModel.findByIdAndUpdate(_id, { isPurchased })
		.then(() => res.set(201).send("Updated Successfully"))
		.catch((err) => console.log(err));
};

module.exports.deleteGrocery = async (req, res) => {
	const { _id } = req.body;
	GroceryModel.findByIdAndDelete(_id)
		.then(() => res.set(201).send("Deleted Successfully"))
		.catch((err) => console.log(err));
};
