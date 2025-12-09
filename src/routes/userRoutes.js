import express from "express";
import { getAllUsers, createUser, getUserByEmail, updateUserByEmail, deleteUserByEmail } from "../controllers/userController.js";

const router = express.Router();


// Get all users
router.get("/", getAllUsers)

// Create a new user
router.post("/", createUser); 

// get single user by email
router.get("/:email", getUserByEmail)

// Update a user by email
router.put("/:email", updateUserByEmail)

// Delete a user by email

router.delete("/:email", deleteUserByEmail)

export default router;
