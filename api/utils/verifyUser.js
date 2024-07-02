import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        next(errorHandler(401, "You are not authenticated"));
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) {
            next(errorHandler(403, "Invalid token"));
        }

        req.user = user;
        next();
    });
};
