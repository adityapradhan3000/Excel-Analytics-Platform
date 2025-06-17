import express from "express"
import { create3DChart, deleteThreeDChart, getThreeDCharts } from "../controllers/threeDController.js";

const threeDchartRouter = express.Router();

threeDchartRouter.post("/post3DChart", create3DChart);
threeDchartRouter.get("/get3DChart", getThreeDCharts);
threeDchartRouter.delete("/delete3DChart/:id", deleteThreeDChart);

export default threeDchartRouter;