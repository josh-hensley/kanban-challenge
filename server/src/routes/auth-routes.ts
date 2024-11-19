import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  try {
    const data = await req.body;
    
    res.json(data);
  } 
  catch (error) {
    console.error(error)
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
