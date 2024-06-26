import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then( () => {
        console.log("Connected to database successfully");
    })
    .catch( (err) => {
        console.error(err);
    });

const app = express();
const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.use("/api/user", userRoutes);