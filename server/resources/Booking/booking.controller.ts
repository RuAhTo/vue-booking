import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'
import dotenv from 'dotenv'
import { start } from "repl";

dotenv.config();
const prisma = new PrismaClient();

export const getAllBookings = async (req: Request, res: Response) => {
    try {
        const bookings = await prisma.booking.findMany();
        if (bookings.length === 0) {
            res.status(404).json({ message: 'No bookings found.' });
            return;
        }
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ error: 'Database query failed', details: error });
    }
};

export const getSpecificBooking = async (req: Request, res: Response) => {
        const { id } = req.params;

        if(isNaN(parseInt(id))) {
            res.status(400).json({ message: 'Invalid user ID.'});
            return;
        }

    try {

        const user = await prisma.user.findUnique({
            where: {id: parseInt(id)}
        })

        if(!user){
            res.status(404).json({ message: 'Booking not found.'});
            return;
        }

        res.status(200).json(user);
        return;
    } catch(error){
        res.status(500).json({ error: 'Database query failed', details: error})
        console.error('Error details', error)
    }
}

export const createBooking = async (req: Request, res: Response) => {
    const {startTime, endTime, user} = req.body;

    try{
        const booking = await prisma.booking.create({
            data: {
                startTime: startTime,
                endTime: endTime,
                user: user,
            }
        })


        res.status(201).json({ id: booking.id, message: 'Booking created!', startTime: booking.startTime, endTime: booking.endTime  });
        

    }catch(error){
        res.status(500).json({ message: 'Database query failed', details: error })
        console.error('Error details', error )
    }
}