const db = require('./config/db');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve frontend files
app.use(express.static('public'));

// Test API route
app.get('/api/test', (req, res) => {
    res.json({
        message: 'Personal Resume API is working!'
    });
});
app.get('/api/db-test', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT 1 AS result');

        res.json({
            message: 'Database connected successfully!',
            result: rows[0].result
        });

    } catch (error) {
        console.error('Database error:', error);

        res.status(500).json({
            message: 'Database connection failed!'
        });
    }
});

// Get profile information
app.get('/api/profile', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM profile');

        res.json(rows);

    } catch (error) {
        console.error('Error fetching profile:', error);

        res.status(500).json({
            message: 'Failed to retrieve profile information.'
        });
    }
});
// Get education information
app.get('/api/education', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM education');

        res.json(rows);

    } catch (error) {
        console.error('Error fetching education:', error);

        res.status(500).json({
            message: 'Failed to retrieve education information.'
        });
    }
});
// Get skills information
app.get('/api/skills', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM skills');

        res.json(rows);

    } catch (error) {
        console.error('Error fetching skills:', error);

        res.status(500).json({
            message: 'Failed to retrieve skills information.'
        });
    }
});

// Get projects information
app.get('/api/projects', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM projects');

        res.json(rows);

    } catch (error) {
        console.error('Error fetching projects:', error);

        res.status(500).json({
            message: 'Failed to retrieve projects information.'
        });
    }
});

// Get experience information
app.get('/api/experience', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM experience');

        res.json(rows);

    } catch (error) {
        console.error('Error fetching experience:', error);

        res.status(500).json({
            message: 'Failed to retrieve experience information.'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
