import express from "express";
import { test, updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

// Create a new router instance for handling routes
const router = express.Router();

// Define a GET route on the root path ('/') and associate it with the 'test' middleware function
router.get("/", test);

// Define a POST route on the '/update/:id' path and verify the user using 'verifyUser' middleware before associating it with the 'updateUser' middleware function
router.post("/update/:id", verifyToken, updateUser);

// Export the router for use in other parts of the application
export default router;
