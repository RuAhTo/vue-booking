import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'
import dotenv from 'dotenv'

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

export async function getSpecificBooking(res:Response, req:Request) {

    const {id} = req.params;

    if (isNaN(Number(id))) {
        res.status(400).json({ message: 'Invalid user ID.' });
        return
    }

    try{

        const user = await prisma.user.findUnique({
            where: {id: Number(id)}
        })

        if(!user){
            res.status(404).json({ message: 'User not found'})
            return
        }
        
        res.status(200).json(user);
        return

    } catch(error){
        res.status(500).json({ error: 'Database query failed', details: error})
        console.error('Error details', error)
    }
}