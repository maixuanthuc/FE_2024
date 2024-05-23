// LoginForm.tsx
import React, { useState } from 'react';
import '../css/login.css'; // Import CSS file

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    return (
          <div>
              <h1>Login Form</h1>
        <form className="form-container" >

            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}

                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}

                />
            </div>
            <button type="submit">Login</button>
        </form>
          </div>
    );
};

export default LoginForm;
