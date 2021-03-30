const router = require("express").Router();
const db = require("../models/workout");  // Import workout model

//post exercise
router.post("/api/workout", ({ body }, res) => {
    db.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  