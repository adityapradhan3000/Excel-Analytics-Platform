import express from "express"
import { createChart, deleteCharts, getCharts, getChartStatus } from "../controllers/chartController.js";

const chartRouter = express.Router();

chartRouter.post("/addCharts", createChart);
chartRouter.get("/fetchCharts", getCharts);
chartRouter.delete("/deleteChart/:id", deleteCharts);
chartRouter.get("/chartStats", getChartStatus);

export default chartRouter;