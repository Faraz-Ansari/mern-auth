import express from "express";
import { updateUser, deleteUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

// Create a new router instance for handling routes
const router = express.Router();

// Define a POST route on the '/update/:id' path and verify the user using 'verifyUser' middleware before associating it with the 'updateUser' middleware function
router.post("/update/:id", verifyToken, updateUser);

// Define a DELETE route on the '/delete/:id' path and verify the user using 'verifyUser' middleware before associating it with the 'delete' middleware function
router.delete("/delete/:id", verifyToken, deleteUser);

// Export the router for use in other parts of the application
export default router;
