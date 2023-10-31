import { useState } from 'react';
import './Login.css';

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

    // Handle submit (validation)
    function handleSubmit(event) {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
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
                    <a href="/register" className='text-teal'> Register Here.</a>
                </span>
            </div>
        </>
    );
}

export default Login;
