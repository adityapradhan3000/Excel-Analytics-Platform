import express from "express"
import { deleteUsers, getUserCount, getUsers, login, logout, register } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login); 
authRouter.post('/logout', logout);
authRouter.get('/getUsers', getUsers);
authRouter.delete('/deleteUsers/:id', deleteUsers);
authRouter.get('/userStatus', getUserCount);

export default authRouter;