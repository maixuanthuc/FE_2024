import React, { useState } from 'react';
import '../css/login.css'; // Ensure your CSS file is imported

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== rePassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, email }),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccess('Registration successful');
                // Clear form fields
                setUsername('');
                setPassword('');
                setRePassword('');
                setEmail('');
                setError('');
            } else {
                setError(data.msg);
            }
        } catch (err) {
            console.error('Error:', err);
            setError('An error occurred');
        }
    };

    return (
        <div>
            <h1>Register Form</h1>
            <form className="form-container" onSubmit={handleRegister}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="re_password">Re-enter Password:</label>
                    <input
                        type="password"
                        id="re_password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
                {error && <p>{error}</p>}
                {success && <p>{success}</p>}
            </form>
        </div>
    );
};

export default Register;
