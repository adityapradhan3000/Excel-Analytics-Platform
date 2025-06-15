import express from "express"
import { deleteUsers, getUsers, login, logout, register } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login); 
authRouter.post('/logout', logout);
authRouter.get('/getUsers', getUsers);
authRouter.delete('/deleteUsers/:id', deleteUsers)

export default authRouter;