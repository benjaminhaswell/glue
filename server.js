import express from 'express';
import cors from 'cors';
import { getAllApps, verifyLogin, registerAccount } from './src/api/api.js';

const app = express();
const port = 3000; // Use the port your app is running on

// Middleware to parse JSON requests
app.use(express.json());

// Use the cors middleware
app.use(cors());

// Define an API endpoint to get database info
app.get('/api/apps', async (req, res) => {

    try {

        // Get data from MongoDB
        const apps = await getAllApps();

        // Send the data as a response
        res.json(apps);

    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }

});

app.post('/login', async (req, res) => {
    try {

        const { username, password } = req.body;

        const validLogin = await verifyLogin(username, password);

        if (validLogin) {
            res.json({ message: 'Login successful' });
        } else {
            res.json({ message: 'Login unsuccessful' });
        }
        
    } catch (error) {
        console.error('Error during login verification:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/register', async (req, res) => {
    try {

        const { username, password } = req.body;

        const success = await registerAccount(username, password);

        if (success) {
            res.json({ message: 'Registration successful' });
        } else {
            res.json({ message: 'Registration unsuccessful' });
        }
        
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});