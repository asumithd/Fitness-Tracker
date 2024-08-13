const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParse = require("body-parser");

const workoutsRoute = require("./routes/workouts");
const metricsRoute = require("./routes/metrics");
const fitnessGoalsRoute = require("./routes/fitnessGoals");

const app = express();

app.use(cors());
app.use(bodyParse.json());

mongoose.connect("mongodb://localhost:27017/fitnessTracker");

app.use("/api", workoutsRoute);
app.use("/api", metricsRoute);
app.use("/api", fitnessGoalsRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
