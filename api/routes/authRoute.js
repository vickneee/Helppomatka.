import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

// Route Middlewares
// This will prefix all routes with '/auth' (e.g. '/api/auth/register', '/api/auth/login')
// app.use('/api/auth', AuthRoute);

// REGISTER Path
router.post("/register", register)

// LOGIN Path
router.post("/login", login)

export default router
