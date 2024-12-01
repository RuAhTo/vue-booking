import express from "express";
import { getAllBookings, getSpecificBooking } from "./booking.controller";

const router = express.Router();

router.get('/bookings', getAllBookings)          //Get all users
router.get('/bookings:id', getSpecificBooking)       //Get specific user
router.post('/bookings')         //Create user
router.put('/bookings:id')       //Update specific user
router.delete('/bookings:id')    //Delete specific user

export default router