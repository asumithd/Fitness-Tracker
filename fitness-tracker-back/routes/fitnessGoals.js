const express = require("express");
const router = express.Router();
const FitnessGoal = require("../models/fitnessGoal");

router.post("/fitnessGoals", async (req, res) => {
    try {
        const fitnessGoal = new FitnessGoal(req.body);
        await fitnessGoal.save();
        res.status(201).send(fitnessGoal);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get("/fitnessGoals", async (req, res) => {
    try {
        const fitnessGoal = await FitnessGoal.find();
        if (!fitnessGoal) {
            return res.status(404).send();
        }
        res.send(fitnessGoal);
    } catch (err) {
        res.status(500).send(err);
    }
});
router.delete("/fitnessGoals/:id", async (req, res) => {
    const fitnessGoalId = req.params.id;
    const fitnessGoal = await FitnessGoal.findByIdAndDelete(fitnessGoalId)
        .then(() => res.status(204).send())
        .catch((err) => res.status(500).send(err));
});

module.exports = router;
