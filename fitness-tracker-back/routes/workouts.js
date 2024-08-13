const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

router.post("/workouts", async (req, res) => {
    try {
        const workout = new Workout(req.body);
        await workout.save();
        res.status(201).send(workout);
    } catch (err) {
        res.staus(400).send(err);
    }
});

router.get("/workouts", async (req, res) => {
    try {
        const workout = await Workout.find();
        if (!workout) {
            return res.status(404).send();
        }
        res.send(workout);
    } catch (err) {
        res.status(500).send(err);
    }
});
router.delete("/workouts/:id", async (req, res) => {
    const workoutId = req.params.id;
    await Workout.findByIdAndDelete(workoutId)
        .then(() => res.status(204).send())
        .catch((err) => res.status(500).send());
});
module.exports = router;
