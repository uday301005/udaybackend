import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {dbConnection} from './database/dbConnection.js';
import {errorMiddleware} from './error/error.js';
import reservationRoute from './routes/reservationRoute.js';

dotenv.config({ path: "./config/config.env" });

const app = express();

const allowedOrigins = [
    process.env.FRONTEND_URL,
    "http://localhost:5174",
    "http://127.0.0.1:5174",
    "https://masterfood.onrender.com"
];

app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/reservation', reservationRoute);

// Test route to verify server is working
app.get('/', (req, res) => {
    res.json({ message: 'Server is working' });
});

dbConnection();
app.use(errorMiddleware);
export default app;