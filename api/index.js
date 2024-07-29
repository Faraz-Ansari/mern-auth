import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch((err) => {
        console.error(err);
    });

const app = express();

const PORT = 3000;

// Define the path of the current directory
const __dirname = path.resolve();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/client/dist")));

// Serve the index.html from the React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Define a custom error handler middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
