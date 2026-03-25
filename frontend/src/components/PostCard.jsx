export default function PostCard() {
    return (
        <div className="post-card">
            {/* Author Header */}
            <div className="post-header">
                <div className="post-author-info">
                    <img src="https://i.pravatar.cc/150?img=12" className="author-avatar" alt="Author" />
                    <div className="author-details">
                        <h4>Ramswaroop <span className="handle">@chauhan53</span></h4>
                        <span className="post-time">Tue, 24 Mar, 2026, 12:14 PM</span>
                    </div>
                </div>
                <button className="follow-btn">Follow</button>
            </div>
            
            {/* Text Content */}
            <div className="post-content">
                <p>🏆 LEADERBOARD ACHIEVEMENT 🏆<br/>I secured rank in TaskPlanet Leaderboard!</p>
                <p>💪 Play now and join the competition!<br/><span className="hashtags">#TaskPlanet #Leaderboard #Winning</span></p>
                
                {/* Mockup Image Banner */}
                <div className="post-image-banner">
                    <h3>🎉 CONGRATULATIONS! 🎉</h3>
                    <p>MY Leaderboard Achievement</p>
                </div>
            </div>

            {/* Interaction Footer */}
            <div className="post-actions">
                <button>♡ 5</button>
                <button>💬 17</button>
                <button>🔗 1</button>
            </div>
        </div>
    )
}
