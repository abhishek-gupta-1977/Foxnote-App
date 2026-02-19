import express from "express";
import {
  forgotPassword,
  Login,
  resetPassword,
  SignUp,
  verifyOTP,
} from "../controllers/controller.js";
const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOTP);
router.post("/reset-password", resetPassword);

export default router;
