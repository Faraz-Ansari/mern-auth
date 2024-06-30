// Import the mongoose module to interact with MongoDB
import mongoose from "mongoose";

// Define the schema for the User model with specific fields and validation rules
const userSchema = new mongoose.Schema(
    {
        // Define a username field that is a string, required, and must be unique
        username: {
            type: String,
            required: true,
            unique: true,
        },
        // Define an email field that is a string, required, and must be unique
        email: {
            type: String,
            required: true,
            unique: true,
        },
        // Define a password field that is a string and required
        password: {
            type: String,
            required: true,
        },
        // Define a photo field that is a string
        profilePicture: {
            type: String,
            default:
                "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
        },
    },
    { timestamps: true }
); // Enable automatic creation of createdAt and updatedAt fields

// Create a User model using the schema defined above
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
export default User;
