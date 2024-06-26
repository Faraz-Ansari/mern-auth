// Import the express module to create a router
import express from "express";
// Import the 'test' function from the user controller
import { test } from "../controller/user.controller.js";

// Create a new router instance for handling routes
const router = express.Router();

// Define a GET route on the root path ('/') and associate it with the 'test' function
router.get("/", test);

// Export the router for use in other parts of the application
export default router;