import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://mini-social-post-application-3e4w.onrender.com/api/auth/register", {
                username,
                email,
                password,
            });

            console.log("Success", response.data);
            alert("Registration Successful!");

        } catch (err) {
            console.log("Error", err.response?.data);
            alert("Registration Failed! " + (err.response?.data?.error || ""));
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Create an Account</h2>

                <form className="login-form" onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
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

                    <button type="submit">Register</button>
                </form>

                <p>Already have an account? <Link to="/login">Log in here</Link></p>
            </div>
        </div>
    )
}
