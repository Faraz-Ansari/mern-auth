// Import the User model to interact with the user database collection
import User from '../models/user.model.js';
// Import bcryptjs for password hashing
import bcryptjs from 'bcryptjs';

// Define the signup controller function as an asynchronous function
export const signup = async (req, res) => {
    // Destructure username, email, and password from the request body
    const { username, email, password } = req.body;
    // Hash the password using bcryptjs with a salt round of 10
    const hashedPassword = bcryptjs.hashSync(password, 10);
    // Create a new user instance with the provided username, email, and hashed password
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        // Attempt to save the new user to the database
        await newUser.save();
        // If successful, send a 201 status code with a success message
        res.status(201).json({ message: "User created successfully" });
    } catch(error) {
        // If an error occurs, send a 500 status code with the error object
        res.status(500).json({error})
    }
};