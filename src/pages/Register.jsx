import { useState } from 'react';
import './Register.css';

function Register() {

    // Use state for username and password
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verPassword, setVerPassword] = useState('');

    // Update username and password upon change
    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }
    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }
    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }
    function handleVerPasswordChange(event) {
        setVerPassword(event.target.value);
    }

    // Handle submit (validation)
    function handleSubmit(event) {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    }

    return (
        <>
            <div className="flex items-center justify-center flex-col mt-48">
                <h1 className='text-teal text-2xl font-semibold'>Create Account</h1>

                {/* Registration form */}
                <form className='mt-8 flex flex-col' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        aria-label="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                    <br />
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        aria-label="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                    <br />
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
                    <input
                        type="verPassword"
                        name="verPassword"
                        id="verPassword"
                        placeholder="Verify Password"
                        aria-label="verPassword"
                        value={verPassword}
                        onChange={handleVerPasswordChange}
                    />
                    <br />
                    <input className="bg-teal text-white border-none focus:border-black cursor-pointer hover:bg-green" type="submit" value="Create" />
                </form>
            </div>
        </>
    );
}

export default Register;
