import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);


    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label for="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id="email" name="email" data-testid="email-input"/>
                <label for="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='********' id="password" name="password" data-testid="password-input"/>
                <button type="submit" data-testid="signin-button">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}