import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }
        
        console.log("Attempting to connect to MongoDB...");
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "Restaurant"
        });
        
        console.log(`MongoDB Connected Successfully to: ${conn.connection.host}`);
        
        // Add error handlers for the connection
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        // Exit process with failure if connection fails
        process.exit(1);
    }
}
