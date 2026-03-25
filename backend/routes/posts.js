import express from "express";
import { createPost, getFeedPosts } from "../controllers/posts.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/create", authMiddleware, createPost);
router.get('/', authMiddleware, getFeedPosts);

export default router;