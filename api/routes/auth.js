import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

// REGISTER Path
router.post("/register", register)

// LOGIN Path
router.post("/login", login)

export default router
