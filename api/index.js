import cors from 'cors';
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";


const app = express();
dotenv.config();
app.use(cors());
// Function to connect to MongoDB database
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB!');
    } catch (error) {
        throw error;
    }
};

// this event listener if IP address deleted from mongoDB then we will get disconnected
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!");
});

mongoose.connection.on("Connected", () => {
    console.log("MongoDB connected!");
});

//middlewares
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


// Starting the Express application to listen on port 8800

app.listen(8800, () => {    
    connect();// Calling the connect function to establish a connection to MongoDB when the server starts
    console.log('Connected to Backend!');
});
