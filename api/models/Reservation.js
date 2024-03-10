import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  
  reservationNumber: {
    type: String,
    required: true,
    unique: true
  },
  
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users', // The value of 'ref' must match the name of the users collection
    required: true
  },
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hotels', // The value of 'ref' must match the name of the hotels collection
    required: true
  },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'rooms', // Added to reference the specific room reserved
    required: true
  },
  checkInDate: {
    type: Date,
    required: true
  },
  checkOutDate: {
    type: Date,
    required: true
  },
  guestCount: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['confirmed', 'cancelled', 'pending'],
    default: 'pending'
  }
}, { timestamps: true });

export default mongoose.model("Reservation", ReservationSchema)