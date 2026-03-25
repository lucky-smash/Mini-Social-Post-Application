import express from "express";
import { createPost } from "../controllers/posts.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/create", authMiddleware, createPost);

export default router;