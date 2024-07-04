// Import the User model to interact with the user database collection
import User from "../models/user.model.js";
// Import bcryptjs for password hashing
import bcryptjs from "bcryptjs";
// Import the errorHandler function to handle errors
import { errorHandler } from "../utils/error.js";
// Import the jwt module to create and verify tokens
import jwt from "jsonwebtoken";

// Define the signup controller function as an asynchronous function
export const signup = async (req, res, next) => {
    // Extract user details from request
    const { username, email, password } = req.body;
    // Secure password with bcryptjs
    const hashedPassword = bcryptjs.hashSync(password, 10);
    // Initialize new user with hashed password
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        // Save user to database
        await newUser.save();
        // Respond with success if user is saved
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        // Handle database save errors
        next(error);
    }
};

// Define the signin controller function as an asynchronous function
export const signin = async (req, res, next) => {
    // Extract user details from request
    const { email, password } = req.body;
    try {
        // Find user by email in database
        const validUser = await User.findOne({ email });

        if (!validUser) {
            // Respond with error if user is not found
            return next(errorHandler(404, "User not found"));
        }
        // Compare password with hashed password
        const validPassword = bcryptjs.compareSync(
            password,
            validUser.password
        );
        if (!validPassword) {
            // Respond with error if password is incorrect
            return next(errorHandler(401, "Invalid credentials"));
        }

        // Create a new token with user details
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

        // Destructure password from user object
        const { password: hashedPassword, ...restOfUser } = validUser._doc;

        // Set expiry date of 1 hour for token
        const expiryDate = new Date(Date.now() + 3600000);

        // Respond with success and token if user is authenticated
        res.cookie("access_token", token, {
            httpOnly: true,
            expires: expiryDate,
        })
            .status(200)
            .json({ restOfUser });
    } catch (error) {
        // Handle database find errors
        next(error);
    }
};

// Define the google controller function as an asynchronous function
export const google = async (req, res, next) => {
    try {
        // Find user by email in database
        const user = await User.findOne({ email: req.body.email });

        if (user) {
            // Create a new token with user details
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

            // Destructure password from user object
            const { password: hashedPassword, ...restOfUser } = user._doc;

            // Set expiry date of 1 hour for token
            const expiryDate = new Date(Date.now() + 3600000);

            // Respond with success and token if user is authenticated
            res.cookie("access_token", token, {
                httpOnly: true,
                expires: expiryDate,
            })
                .status(200)
                .json({ restOfUser });
        } else {
            // Generate a random password for new user
            const generatedPassword =
                Math.random().toString(36).slice(-8) +
                Math.random().toString(36).slice(-8);

            // Secure password with bcryptjs
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

            // Create a new user with Google details
            const newUser = new User({
                // Generate a unique username with random number
                username:
                    req.body.name.split(" ").join("").toLowerCase() +
                    Math.floor(Math.random() * 10000).toString(),
                email: req.body.email,
                password: hashedPassword,
                profilePicture: req.body.photo,
            });

            // Save user to database
            await newUser.save();

            // Create a new token with user details
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

            // Destructure password from user object
            const { password: hashedPasswordFromResponse, ...restOfUser } =
                newUser._doc;

            // Set expiry date of 1 hour for token
            const expiryDate = new Date(Date.now() + 3600000);

            // Respond with success and token if user is authenticated
            res.cookie("access_token", token, {
                httpOnly: true,
                expires: expiryDate,
            })
                .status(200)
                .json({ restOfUser });
        }
    } catch (error) {
        next(error);
    }
};

// Define the signout controller function
export const signout = (req, res) => {
    res.clearCookie("access_token").status(200).json("Signout successful");
};