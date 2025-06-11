import express from "express"
import { adminlogin, adminLogout, registerAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/adminRegister", registerAdmin);
adminRouter.post("/adminLogin", adminlogin);
adminRouter.post("/adminLogout", adminLogout);

export default adminRouter;