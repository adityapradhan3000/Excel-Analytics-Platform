import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js'

const app = express();
const port = process.env.PORT || 4000;
const allowedOrigins = ['http://localhost:5173']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));

connectDB();


//API Endpoint
app.get("/", (req, res) => {
    res.send("API is working now!")
})
app.use('/api/auth', authRouter)

app.listen(port, () => {
console.log(`The server is listening at http://localhost:${port}`);});