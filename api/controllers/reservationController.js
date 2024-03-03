import Reservation from "../models/Reservation.js";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { createError } from "../utils/error.js";

// CREATE a Reservation
export const createReservation = async (req, res, next) => {
  const newReservation = new Reservation(req.body);

  try {
    const savedReservation = await newReservation.save();
    res.status(200).json(savedReservation);
  } catch (err) {
    next(err);
  }
};

// GET a Reservation
export const getReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return next(createError(404, "Reservation not found"));
    }

    res.status(200).json(reservation);
  } catch (err) {
    next(err);
  }
};

// GET all Reservations
export const getReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (err) {
    next(err);
  }
};

export const getReservationsByUser = async (req, res, next) => {
    try {
      const userId = req.user.id;
      const reservations = await Reservation.find({ userId: userId });
      res.status(200).json(reservations);
    } catch (err) {
      next(err);
    }
  };


// UPDATE a Reservation
export const updateReservation = async (req, res, next) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedReservation) {
      return next(createError(404, "Reservation not found"));
    }

    res.status(200).json(updatedReservation);
  } catch (err) {
    next(err);
  }
};

// DELETE a Reservation
export const deleteReservation = async (req, res, next) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);

    if (!deletedReservation) {
      return next(createError(404, "Reservation not found"));
    }

    res.status(200).json("Reservation has been deleted.");
  } catch (err) {
    next(err);
  }
};


