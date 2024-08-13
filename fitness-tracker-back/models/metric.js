const { default: mongoose } = require("mongoose");

const metricSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    weight: Number,
    bodyFatPercentage: Number,
});

const Metric = mongoose.model("metric", metricSchema);

module.exports = Metric;
