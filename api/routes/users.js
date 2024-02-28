import express from "express";
import {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// GET a User
router.get("/:id", verifyUser, getUser);

// GET all Users
router.get("/", verifyAdmin, getUsers);

// UPDATE a User
router.put("/:id", verifyUser, updateUser);

// DELETE a User
router.delete("/:id", verifyUser, deleteUser);

export default router;
