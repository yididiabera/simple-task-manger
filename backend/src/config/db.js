import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)

        console.log(`Database connected successfully: ${connection.connection.host}`)

    } catch (error) {
        console.log("MongoDB connection error: ", error.message);
        process.exit(1);
    }
}

export default connectDB;