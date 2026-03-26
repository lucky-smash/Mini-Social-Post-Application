import { useState } from 'react';
import axios from 'axios';

export default function PostCard({ post, refreshPosts }) {
    const [showComments, setShowComments] = useState(false);
    const [commentText, setCommentText] = useState("");

    if (!post) return null;

    const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const isLiked = post.likes.includes(userId);

    const handleLike = async () => {
        try {
            await axios.patch(`http://localhost:5000/api/posts/${post._id}/like`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            refreshPosts();
        } catch (err) {
            console.log("Like failed:", err);
        }
    };

    const handleComment = async () => {
        if (!commentText.trim()) return;
        try {
            await axios.post(`http://localhost:5000/api/posts/${post._id}/comment`, {
                text: commentText
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setCommentText("");
            refreshPosts();
        } catch (err) {
            console.log("Comment failed:", err);
        }
    };

    return (
        <div className="post-card">
            {/* Author Header */}
            <div className="post-header">
                <div className="post-author-info">
                    <img src={`https://i.pravatar.cc/150?u=${post.userId._id}`} className="author-avatar" alt="Author" />
                    <div className="author-details">
                        <h4>{post.userId.username} <span className="handle">@{post.userId.username}</span></h4>
                        <span className="post-time">{formattedDate}</span>
                    </div>
                </div>
                <button className="follow-btn">Follow</button>
            </div>
            
            {/* Text Content */}
            <div className="post-content">
                {post.description && <p>{post.description}</p>}
                
                {post.picturePath && (
                    <div className="post-image-banner" style={{background: 'linear-gradient(135deg, #1877f2, #2d88ff)'}}>
                        <h3 style={{fontSize: '18px'}}>{post.picturePath}</h3>
                    </div>
                )}
            </div>

            {/* Interaction Footer */}
            <div className="post-actions">
                <button onClick={handleLike} style={{color: isLiked ? '#e74c3c' : '', fontWeight: isLiked ? 'bold' : '500'}}>
                    {isLiked ? '❤️' : '♡'} {post.likes.length}
                </button>
                <button onClick={() => setShowComments(!showComments)}>
                    💬 {post.comments.length}
                </button>
                <button>🔗 Share</button>
            </div>

            {/* Comments Section (Toggled) */}
            {showComments && (
                <div className="comments-section">
                    {/* Existing Comments */}
                    {post.comments.map((c, i) => (
                        <div key={i} className="comment-item">
                            <strong>{c.username}:</strong> {c.text}
                        </div>
                    ))}

                    {/* Add Comment Input */}
                    <div className="comment-input-row">
                        <input 
                            type="text" 
                            placeholder="Write a comment..." 
                            value={commentText} 
                            onChange={(e) => setCommentText(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleComment()}
                        />
                        <button onClick={handleComment}>Send</button>
                    </div>
                </div>
            )}
        </div>
    )
}
