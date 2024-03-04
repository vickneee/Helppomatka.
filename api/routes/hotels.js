import express from "express";
import {
  createHotel,
  getHotel,
  getHotels,
  updateHotel,
  deleteHotel,
  countByCity,
  countByType,
  getHotelRooms,
} from "../controllers/hotelController.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

// CREATE a Hotel
router.post("/", createHotel);//verifyAdmin

// GET a Hotel
router.get("/:id", getHotel);

// GET ALL
router.get("/", getHotels);

// UPDATE
router.put("/:id",updateHotel);//verifyAdmin

// UPDATE USING PATCH
router.patch("/:id",updateHotel);//verifyAdmin

// DELETE
router.delete("/:id",verifyAdmin, deleteHotel);

// COUNT by City
router.get("/countByCity", countByCity);

// COUNT by Type
router.get("/countByType", countByType);

// GET all Rooms
router.get("/room/:id", getHotelRooms);

export default router;
