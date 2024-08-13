import { Router } from "express";
import { handleLogin,handleSignup,handleVerify } from "../controllers/authControllers.js";

const router=Router()

router.post("/login",handleLogin);
router.post("/signup",handleSignup)
router.post("/verify",handleVerify)

export default router