import { handleHome } from "../controllers/userControllers.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { Router } from "express";

const router=Router();
router.get("/",isAuthenticated,handleHome)
export default router;