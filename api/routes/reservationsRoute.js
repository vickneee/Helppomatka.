import express from "express";
import {
  createReservation,
  getReservation,
  getReservations,
  updateReservation,
  deleteReservation,
  getReservationsByUser
} from "../controllers/reservationController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Middleware to verify that the user is an admin
// All routes are prefixed with /api/reservations
// app.use("/api/reservations", reservationsRoute);

// Create a reservation
// Here we assume that both registered users and administrators can create reservations
router.post("/", createReservation);

// Get a specific reservation
// User or admin verification to ensure that they can only access their own reservations or have broad permissions
router.get("/find/:id", getReservation);

// Get all reservations
// This would generally be restricted to administrators only
router.get("/", getReservations);

// Get reservations by logged-in user
router.get("/myreservations", getReservationsByUser);

// Update a reservation
// Users should be able to update their own reservations, admins can update any reservation
router.put("/:id", verifyUser, updateReservation);

// Delete a reservation
// Both users and administrators might need this functionality, but it's more common to restrict it to administrators
router.delete("/:id", verifyUser, deleteReservation);

export default router;

