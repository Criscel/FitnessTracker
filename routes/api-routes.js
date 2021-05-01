// Import express router
const router = require("express").Router();

// Import workout model
const db = require("../models/workout");

// Request for getting all workout
router.get("/api/workouts", (req, res) => {
	db.find()
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

//select workout range
router.get("/api/workouts/range", (req, res) => {
	db.find()
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

//post workout
router.post("/api/workouts", ({ body }, res) => {
	db.create(body)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

//add workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
	db.findByIdAndUpdate(params.id, { $push: { exercises: body } })
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

// Export API routes
module.exports = router;