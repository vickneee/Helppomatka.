import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  reserve: {
    type: String,
    default: "seen",
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Hotel", HotelSchema)


/*
{
	"name": "Les Jardins De La Koutoubia",
	"type": "Hotel",
	"city": "Marakesh",
	"address": "Medina Marrakech ",
	"distance": "900",
	"title": " luxurious hotel in the city",
	"desc": "hotel description",
	"cheapestPrice": 225
	
}
*/