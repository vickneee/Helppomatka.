
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express();
dotenv.config();

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

// Starting the Express application to listen on port 8800

app.listen(8800, () => {    
    connect();// Calling the connect function to establish a connection to MongoDB when the server starts
    console.log('Connected to Backend!');
});
