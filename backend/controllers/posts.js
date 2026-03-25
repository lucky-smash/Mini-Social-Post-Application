import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        if (!description && !picturePath) {
            return res.status(400).json({ message: "Post must have text or an image." });
        }

        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            description,
            picturePath,
            likes: [],
            comments: [],
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}