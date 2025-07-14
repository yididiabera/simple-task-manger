import express from "express";
import { signin, signup } from "../controllers/auth.controller.js"

const route = express.Router();

// @route POST /api/auth/signup 
route.post('/signup', signup)

// @route POST /api/auth/signin 
route.post('/signin', signin)

export default route;