import express from "express";
import { createUser } from "./user.controller";

const router = express.Router();

router.get('/user')          //Get all users
router.get('/user:id')       //Get specific user
router.post('/user', createUser) //Create user
router.put('/user:id')       //Update specific user
router.delete('/user:id')    //Delete specific user


export default router