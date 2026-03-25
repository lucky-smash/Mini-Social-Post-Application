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

export const getFeedPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 }).populate('userId', 'username');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (post.likes.includes(userId)) {
            post.likes = post.likes.filter((id) => id !== userId);
        } else {
            post.likes.push(userId);
        }
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const commentOnPost = async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        const userId = req.user.id;
        const user = await User.findById(userId);

        const newComment = {
            username: user.username,
            text: text
        };

        post.comments.push(newComment);
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}   