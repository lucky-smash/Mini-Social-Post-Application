import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard.jsx';

export default function Feed() {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    };
    return (
        <div className="feed-container">
            {/* Top Navigation Bar */}
            <nav className="feed-nav">
                <h2>Social</h2>
                <div className="nav-icons">
                    <div className="badge-coin">🟠 50</div>
                    <div className="badge-rupee">₹0.00</div>
                    <span className="bell-icon">🔔</span>
                    <img src="https://i.pravatar.cc/150?img=11" className="avatar-circle" alt="Profile" />
                </div>
            </nav>

            {/* Search Bar */}
            <div className="search-bar">
                <input type="text" placeholder="Search promotions, users, posts..." />
                <button className="search-btn">🔍</button>
                <button className="moon-btn" onClick={toggleTheme}>{isDark ? '☀️' : '🌙'}</button>
                <img src="https://i.pravatar.cc/150?img=11" className="avatar-circle" alt="Profile" />
            </div>

            {/* Create Post Section */}
            <div className="create-post-section">
                <div className="create-post-header">
                    <h3>Create Post</h3>
                    <div className="toggle-tabs">
                        <button className="active">All Posts</button>
                        <button>Promotions</button>
                    </div>
                </div>
                
                <div className="create-post-input">
                    <img src="https://i.pravatar.cc/150?img=11" className="small-avatar" alt="Profile" />
                    <input type="text" placeholder="What's on your mind?" />
                </div>
                
                <div className="create-post-actions">
                    <div className="action-icons">
                        <span>📷</span>
                        <span>🎥</span>
                        <span className="promote-btn">📢 Promote</span>
                    </div>
                    <button className="post-btn">➤ Post</button>
                </div>
            </div>

            {/* Filter Pills */}
            <div className="filter-scroll">
                <button className="pill active">All Post</button>
                <button className="pill">For You</button>
                <button className="pill">Most Liked</button>
                <button className="pill">Most Commented</button>
                <button className="pill">Most Shared</button>
            </div>

            {/* Posts Container */}
            <div className="posts-container">
                {/* We will map Database posts here eventually. For now, we show the mockup. */}
                <PostCard />
                <PostCard />
            </div>
            
            {/* Bottom Nav Bar */}
            <div className="bottom-nav">
                <div className="nav-item">🏠</div>
                <div className="nav-item">📄</div>
                <div className="floating-social-wrapper">
                    <div className="floating-social-btn">👥</div>
                    <span className="social-text">Social</span>
                </div>
                <div className="nav-item">🏆</div>
                <div className="nav-item">👤</div>
            </div>
        </div>
    )
}
