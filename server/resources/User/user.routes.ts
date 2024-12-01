import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config();
const prisma = new PrismaClient();


export async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { password, email, name } = req.body;

        if (!password || !email || !name) {
            res.status(400).json({ message: 'All fields are required.' });
            return
        }

        const existingEmail = await prisma.user.findUnique({
            where: { email: email }
        });

        if (existingEmail) {
            res.status(400).json({ message: 'User with this email already exists' });
            return
        }
        
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await prisma.user.create({
            data: {
                password: hashedPassword,
                name: name,
                email: email,
            }
        });

        res.status(201).json({ id: newUser.id, message: 'User created!', email: newUser.email });
        return
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ error: 'Database query failed.', details: error });
        return
    }
}