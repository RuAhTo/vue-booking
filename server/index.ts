import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';


dotenv.config();

const app: Application = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const gracefulShutdown = async () => {
    try{
        await prisma.$disconnect();
        console.log('Disconnected from database');
        process.exit(0);
    } catch (error){
        console.error('Error during shutdown:', error)
        process.exit(1);
    }
}

const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`)
        })
    } catch(error){
        console.error('Error starting server', error);
        process.exit(1);
    }
}

// Handle different ways the app might stop
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Start the server
startServer();

export default app;