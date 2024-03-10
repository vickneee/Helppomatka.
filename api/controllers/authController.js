import User from "../models/User.js";
import bcrypt from "bcryptjs";
import {createError} from "../utils/error.js";
import jwt from "jsonwebtoken";

// REGISTER a User
export const register = async (req, res, next) => {
    try {
        // Salting & Hashing
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // CREATING a New User
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });

        await newUser.save();
        res.status(200).send("User has been created.");
    } catch (err) {
        next(err);
    }
};

// LOGIN
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if (!user) return next(createError(404, "User not found!"));


        // PASSWORD Checker
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect)
            return next(createError(400, "password or username not correct!"));

        // Processing TOKEN with JWT SECRET KEY
        const token = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin},
            process.env.JWT
        );

        // Processing ACCESS Token Status
        const {password, isAdmin, ...otherDetails} = user._doc;
        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({details: {...otherDetails}, isAdmin, token}); // Added Token to the Response
    } catch (err) {
        next(err);
    }
};

// Added Middleware to check if the user is logged in
// Middleware to authenticate user and attach user to a req object
export const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]; // Assumes 'Bearer <token>' format
    if (!token) {
        console.log('No token provided');
        return res.status(403).json({ message: 'Authentication token required' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT); // Changed from process.env.JWT_SECRET to process.env.JWT
        req.user = await User.findById(decodedToken.id); // Assumes User is your user model
        next();
    } catch (err) {
        console.log('Error verifying token:', err);
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};
