import express from "express";
import dotenv from "dotenv"
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`)
        })

    } catch (error) {
        console.log("Failed to start a server", error.message)
        process.exit(1);
    }
}

startServer();