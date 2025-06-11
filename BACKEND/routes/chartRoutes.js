import express from "express"
import { createChart, getCharts } from "../controllers/chartController.js";

const chartRouter = express.Router();

chartRouter.post("/addCharts", createChart);
chartRouter.get("/fetchCharts", getCharts);

export default chartRouter;