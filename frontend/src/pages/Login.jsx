import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://mini-social-post-application-3e4w.onrender.com/api/auth/login", {
                email: email,
                password: password,
            });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.user._id);
            console.log("Success", response.data);

            alert("Login Successful!");
            window.location.href = "/feed";

        } catch (err) {
            console.log("Error", err.response.data);
            alert("Login Failed! Check your browser console!");
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Welcome Back</h2>

                <form className="login-form" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Log In</button>
                </form>

                <p>Don't have an account? <Link to="/register">Register here</Link></p>
            </div>
        </div>
    )
}