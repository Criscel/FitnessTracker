// const express = require('express');
const router = require("express").Router();
// const mongoose = require("mongoose");
// mongoose.connect('localhost:27017/test');
// const Schema = mongoose.Schema;

const db = require("../models/workout");  // Import workout model

// module.exports = (app) => {

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

//post workout
router.post("/api/workouts", ({ body }, res) => {
	db.create(body)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
      .catch(err => {
        res.status(400).json(err);
      });
  });

//add workout
router.put("api/workouts/:id", (req, res) => {
  db.findByIdAndUpdate(params.id,
    {
      $push: { exercise:body }
    }
  ) 
  .then((dbWorkout) => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

//select workout range
router.get("/api/workouts/range", (req, res) => {
	db.find()
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch(err => {
      res.status(400).json(err);
    });
});
  
// }
module.exports = router;