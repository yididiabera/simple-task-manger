import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
    return jwt.sign(
        { id: userId },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
    )
}

export const verifyToken = (token) => {
    return jwt.verify(
        token,
        process.env.JWT_SECRET
    )
}