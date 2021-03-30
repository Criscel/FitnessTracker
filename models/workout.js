// I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create new workout schema
const WorkoutSchema = new Schema({
date: {
    type: Date,
    default: Date.now
},
name: {
    type: String,
    trim: true,
    required: "Enter name of Exercise: "
},
type: {
    type: String,
    trim: true,
    required: "Enter type of Exercise: "
},
weight: {
    type: Number,
    required: "Enter weight value: "
},
sets: {
    type: Number,
    required: "Enter sets value: "
},
reps: {
    type: Number,
    required: "Enter repetition value: "
},
duration: {
    type: Number,
    required: "Enter Duration: "
}
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;