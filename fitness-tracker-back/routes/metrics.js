const express = require("express");
const router = express.Router();
const Metric = require("../models/metric");

router.post("/metrics", async (req, res) => {
    try {
        const metric = new Metric(req.body);
        await metric.save();
        res.status(201).send(metric);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get("/metrics", async (req, res) => {
    try {
        const metric = await Metric.find();
        if (!metric) {
            return res.status(404).send();
        }
        res.send(metric);
    } catch (err) {
        res.status(500).send(err);
    }
});
router.delete("/metrics/:id", async (req, res) => {
    const metricId = req.params.id;
    await Metric.findByIdAndDelete(metricId)
        .then(() => res.status(204).send())
        .catch((err) => res.status(500).send());
});
module.exports = router;
