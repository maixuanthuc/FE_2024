// Home.tsx


import React from 'react';

const Register: React.FC = () => {
    return (
        <div>
            <h1>Register Form</h1>
            <form className="form-container">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"


                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"

                    />
                </div>
                <div>
                    <label htmlFor="Repassword">Re Password:</label>
                    <input
                        type="password"
                        id="re_password"

                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"

                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
