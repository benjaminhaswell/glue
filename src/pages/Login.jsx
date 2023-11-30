import React from 'react';
import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Register from './Register.jsx';


function Login() {

    // Use state for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Update username and password upon change
    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    const [formErrors, setFormErrors] = useState({});

    // Validation function to check if username and password are not empty
    function validateForm() {
        const errors = {};

        if (!username.trim()) {
            errors.username = 'Username is required';
        }

        if (!password.trim()) {
            errors.password = 'Password is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    }


    // Handle submit (validation)
    function handleSubmit(event) {
        event.preventDefault();

        // Create an object with username and password
        const credentials = { username, password };

        // Make a POST request to the server
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Server response:', data);
                
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }


    return (
        <>
            <div className="flex items-center justify-center flex-col mt-48">
                <h1 className='text-teal text-2xl font-semibold'>Login</h1>

                {/* Login form */}
                <form className='mt-8 flex flex-col' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        aria-label="Username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        aria-label="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <br />
                    <input className="bg-teal text-white border-none focus:border-black cursor-pointer hover:bg-green" type="submit" value="Login" />
                </form>

                {/* No account? Register */}
                <span className='m-6'>Don&apos;t have an account?  
                    <Link to="/register" replace> Register Here.</Link>
                </span>
            </div>
        </>
    );
}

export default Login;
