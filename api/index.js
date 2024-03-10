import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";
import usersRoute from "./routes/usersRoute.js";
import hotelsRoute from "./routes/hotelsRoute.js";
import roomsRoute from "./routes/roomsRoute.js";
import reservationsRoute from "./routes/reservationsRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

// CONNECTING To MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

// MongoDB Disconnected Message
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});


// MongoDB connected Message
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});

// Middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());


// ROUTE Middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/reservations", reservationsRoute);

// General ERROR Message
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// PORT Listen on ....
app.listen(process.env.PORT, () => {
  connect();
  console.log(`Connected to backend on port ${process.env.PORT}!`);
});
