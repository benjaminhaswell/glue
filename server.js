import express from 'express';
import cors from 'cors';
import { getAllApps } from './src/api/api.js';

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

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});