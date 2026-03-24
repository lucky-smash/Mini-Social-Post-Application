import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    description: {
        type: String,
        required: false,
    },
    picturePath: {
        type: String,
        required: false,
    },
    likes: {
        type: [String],
        default: [],
    },
    comments: {
        type: [{
            username: { type: String, required: true }, // Who commented
            text: { type: String, required: true }      // What they said
        }],
        default: [],
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Post = mongoose.model("Post", postSchema);
export default Post;    