import express from "express";
import dotenv from "dotenv"
import connectDB from "./src/config/db.js";
import cors from "cors"
import authMiddleware from "./src/middlewares/auth.middleware.js";
import authRoutes from "./src/routes/auth.routes.js";
import taskRoutes from "./src/routes/task.routes.js";
import userRoutes from "./src/routes/user.routes.js";

dotenv.config();

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', authMiddleware, taskRoutes);
app.use('api/users', authMiddleware, userRoutes)

// Error handler

const PORT = process.env.PORT || 3000;

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