// Import the User model to interact with the user database collection
import User from '../models/user.model.js';
// Import bcryptjs for password hashing
import bcryptjs from 'bcryptjs';

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
    } catch(error) {
        // Handle database save errors
        next(error);
    }
};