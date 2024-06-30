// Import the express module to enable routing capabilities
import express from "express";
// Import the signup controller function from the auth.controller.js file
import { signup, signin, google } from "../controller/auth.controller.js";

// Initialize a new Router object from express to define route handlers
const router = express.Router();

// Define a POST route for '/signup' that uses the signup function to handle requests
router.post("/signup", signup);

// Define a POST route for '/signin' that uses the signin function to handle requests
router.post("/signin", signin);

// Define a POST route for '/google' that uses the google function to handle requests
router.post("/google", google);

// Export the router to be used in other parts of the application, such as the main server file
export default router;