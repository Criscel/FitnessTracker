// I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create new workout schema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Please Enter Exercise name"
            },
            type: {
                type: String,
                trim: true,
                required: "Please Enter Exercise type"
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number,
                required: "Please Enter Exercise duration"
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model('workout', WorkoutSchema);

module.exports = Workout;