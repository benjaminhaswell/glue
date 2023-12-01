
import { useState } from 'react';
import './Register.css';

function Register() {

    // Use state for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(0);

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    // Handle submit (validation)
    function handleSubmit(event) {
        event.preventDefault();

        // Empty fields
        if (!username || !password) {
            setRegistrationSuccess(-1);
            return;
        }

        setRegistrationSuccess(0);

        // Create an object with username and password
        const credentials = { username, password };

        // Make a POST request to the server
        fetch('http://localhost:3000/register', {
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

            // Handle login
            .then(data => {

                if (data.message === 'Registration unsuccessful') {
                    setRegistrationSuccess(-1);
                } else {
                    setRegistrationSuccess(1);
                }
                console.log('Server response:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <div className="flex items-center justify-center flex-col mt-48">
                <h1 className='text-teal text-2xl font-semibold'>Create Account</h1>

                {/* Login error message */}
                {registrationSuccess == -1 && <h2 className='text-red'>Invalid credentials. Please try again.</h2>}
                {registrationSuccess == 1 && <h2 className='text-green'>Registration Successful!</h2>}

                {/* Registration form */}
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
                    <input className="bg-teal text-white border-none focus:border-black cursor-pointer hover:bg-green" type="submit" value="Create"/>
                </form>
            </div>
        </>
    );
}

export default Register;