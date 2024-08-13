const mongoose = require("mongoose");

const fitnessGoalSchema = new mongoose.Schema({
    goal: String,
    targetDate: { type: Date, default: Date.now },
    progress: Number,
});

const FitnessGoal = mongoose.model("fitnessGoal", fitnessGoalSchema);

module.exports = FitnessGoal;
