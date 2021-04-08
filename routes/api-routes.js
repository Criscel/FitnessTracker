// const express = require('express');
// const router = require("express").Router();
// const mongoose = require("mongoose");
// mongoose.connect('localhost:27017/test');
// const Schema = mongoose.Schema;

const db = require("../models/workout");  // Import workout model

module.exports = (app) => {

// Request for getting all workouts
app.get("/api/workouts", (req, res) => {
	db.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

//post exercise
app.post("/api/workout", ({ body }, res) => {
    db.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//add exercise
app.put("api/workout/:id", (req, res) => {
  db.findByIdAndUpdate(params.id,
    {
      $push: { exercise:body }
    }
  ) 
  .then((dbData) => {
    res.json(dbData);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});
  
}
