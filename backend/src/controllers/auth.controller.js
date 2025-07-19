import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateToken } from "../config/jwt.js"
import User from "../models/user.model.js"

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) return res.status(400).json({ message: "All fields are required!" })

        const userExists = await User.findOne({ email })
        if (userExists) { return res.status(400).json({ Message: "email already exists!" }) }

        //const hashedPassword = bcrypt.hashSync(password, 10);        

        // create a new user
        const user = await User.create({ username, email, password })

        const token = generateToken(user._id)
        // const token = jwt.sign(
        //     { id: user._id },
        //     process.env.JWT_SECRET,
        //     { expiresIn: "7d" })

        res.status(201).json({ token })

    } catch (error) {
        res.status(500).json({ error: "Failed to register a user", details: error.message })
    }
}

export const signin = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) return res.status(400).json({ message: "All fields are required!" })

        const user = await User.findOne({ username }).select("+password");
        if (!user) { res.status(404).json({ Message: "User not Found!" }) }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) { return res.status(401).json({ message: "Invalid credentials!" }) }

        const token = generateToken(user._id)
        // const token = jwt.sign(
        //     { id: user._id },
        //     process.env.JWT_SECRET,
        //     { expiresIn: "7d" })

        res.status(201).json({ token })

    } catch (error) {
        res.status(500).json({ error: "Failed to login", details: error.message })
    }
}
