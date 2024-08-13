import isAuthenticated from "../middlewares/isAuthenticated.js";
import { Router } from "express";

const router=Router();
router.get("/",isAuthenticated,(req,res)=>{
    res.send("you can reach here");
})
export default router;