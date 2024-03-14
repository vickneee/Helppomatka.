import User from "../models/userModel.js";
import {createError} from "../utils/error.js";

// GET a User
export const getUser = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id);

    // Check if no user was found with the provided ID
    if (!user) {
      return next(createError(404, "User not found"));
    }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

// GET all Users
export const getUsers = async (req,res,next)=>{
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}

// UPDATE a User
export const updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    // Check if no user was found with the provided ID
    if (!updatedUser) {
      return next(createError(404, "User not found"));
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}

// DELETE a User
export const deleteUser = async (req,res,next)=>{
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    // Check if no user was found
    if (!deletedUser) {
      return next(createError(404, "User not found"));
    }

    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}
