import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  chartName: { type: String, required: true },
  chartType: { type: String, required: true },
  value1: { type: String, required: true },
  value2: { type: String, required: true },
  value3: { type: String, required: true },
  dateUploaded: { type: Date, default: Date.now },
});

const ThreeDChartModel =
  mongoose.models.threeDchart || mongoose.model("threeDchart", userSchema);

export default ThreeDChartModel;
