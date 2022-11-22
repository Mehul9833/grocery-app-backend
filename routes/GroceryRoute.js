const { Router } = require("express");
const {
	getGrocery,
	saveGrocery,
	updateGrocery,
	deleteGrocery,
} = require("../controllers/GroceryController");
const router = Router();

router.get("/", getGrocery);
router.post("/save", saveGrocery);
router.post("/update", updateGrocery);
router.post("/delete", deleteGrocery);

module.exports = router;
