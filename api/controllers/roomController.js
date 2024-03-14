import Room from "../models/roomModel.js";
import Hotel from "../models/hotelModel.js";
import {createError} from "../utils/error.js";

// CREATE a Room
export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
      const savedRoom = await newRoom.save();
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $push: { rooms: savedRoom._id }, // This is a mongoDB PUSH/POST method
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedRoom); // SAVE a Room
    } catch (err) {
      next(err);
    }
  };

// GET a Room
export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

// GET all Rooms
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

// UPDATE a Room
  export const updateRoom = async (req, res, next) => {
    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedRoom);
    } catch (err) {
      next(err);
    }
  };

// DELETE a Room
export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });


      // Check if no room was found with the provided ID
      if (!deletedRoom) {
        return next(createError(404, "Room not found"));
      }

    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};

  // UPDATE Room Availability
  export const updateRoomAvailability = async (req, res, next) => {
    if (!req.body.unavailableDates) {
      return res.status(400).json({ message: "Missing 'unavailableDates' field." })
    }
      else{
        try {
          await Room.updateOne(
            { "roomNumbers._id": req.params.id },
            {
              $push: {
                "roomNumbers.$.unavailableDates": req.body.unavailableDates
              },
            }
          );
          res.status(200).json("Room status has been updated.");
        } catch (err) {
          next(err);
        }
      }
    
  };
