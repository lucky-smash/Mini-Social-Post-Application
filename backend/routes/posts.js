import express from "express";
import { createPost, getFeedPosts, likePost, commentOnPost } from "../controllers/posts.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/create", authMiddleware, createPost);
router.get('/', authMiddleware, getFeedPosts);
router.patch('/:id/like', authMiddleware, likePost);
router.post('/:id/comment', authMiddleware, commentOnPost);

export default router;