// Import the express module to enable routing capabilities
import express from "express";
// Import the signup controller function from the auth.controller.js file
import { signup, signin } from "../controller/auth.controller.js";

// Initialize a new Router object from express to define route handlers
const router = express.Router();

// Define a POST route for '/signup' that uses the signup function to handle requests
router.post("/signup", signup);

// Define a POST route for '/signin' that uses the signin function to handle requests
router.post("/signin", signin);

// Export the router to be used in other parts of the application, such as the main server file
export default router;