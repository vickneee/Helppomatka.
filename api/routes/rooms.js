import express from "express";
import {
  createRoom,
  getRoom,
  getRooms,
  updateRoom,
  deleteRoom,
  updateRoomAvailability,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

// CREATE a Room
router.post("/:hotelid", verifyAdmin, createRoom);

// GET a Room
router.get("/:id", getRoom);

// GET all Rooms
router.get("/", getRooms);

// UPDATE a Room
router.put("/:id", verifyAdmin, updateRoom);

// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// UPDATE a Room Availability
router.put("/availability/:id", updateRoomAvailability);

export default router;
