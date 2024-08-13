const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    type: String,
    duration: Number,
    date: { type: Date, default: Date.now },
    caloriesBurned: Number,
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
