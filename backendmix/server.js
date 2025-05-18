import app from './app.js'
import dotenv from 'dotenv'
import { dbConnection } from './database/dbConnection.js'

// Load environment variables
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 10000;

const startServer = async () => {
    try {
        // First connect to the database
        await dbConnection();
        
        // Then start the server
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server is running on port ${PORT}`);
            console.log('Process environment:', {
                PORT: process.env.PORT,
                NODE_ENV: process.env.NODE_ENV
            });
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

// Error handling for the server
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise Rejection');
    process.exit(1);
});

startServer();

