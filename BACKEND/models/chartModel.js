import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    chartName: {type: String, required: true},
    chartType: {type: String, required: true},
    value1: {type: String, required: true},
    value2: {type: String, required: true},
    dateUploaded: { type: Date, default: Date.now },
});

const chartModel = mongoose.models.chart || mongoose.model('chart', userSchema);

export default chartModel;