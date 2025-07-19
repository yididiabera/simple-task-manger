import jwt from "jsonwebtoken"
import { verifyToken } from "../config/jwt.js"
import User from "../models/user.model.js"

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided!" })
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = verifyToken(token);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (err) {
        return res.status(401).json({ error: "Not authorized, token failed!" })
    }
}

export default authMiddleware;