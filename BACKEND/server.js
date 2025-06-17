import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js'
import chartRouter from "./routes/chartRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import threeDchartRouter from "./routes/threeDRoutes.js";


const app = express();
const port = process.env.PORT || 4000;
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));

connectDB();


//API Endpoint
app.get("/", (req, res) => {
    res.send("API is working now!")
})
app.use('/api/auth', authRouter);
app.use("/api/chart", chartRouter);
app.use("/api/admin", adminRouter);
app.use("/api/threeDChart", threeDchartRouter);

app.listen(port, () => {
console.log(`The server is listening at http://localhost:${port}`);});