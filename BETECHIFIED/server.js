
const express = require('express');
require('dotenv').config();

const app = express();

// JSON request bodies
app.use(express.json());

// Custom middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});



// GET /
app.get('/', (req, res) => {
    res.send('My Week 2 API!');
});


//post request 

app.post('/user', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: 'Name and email are required'
        });
    }
    res.status(200).json({
        message: `Hello, ${name}!`
    });
});



// GET /user/:id
app.get('/user/:id', (req, res) => {
    const id = req.params.id;

    res.json({
        message: `User ${id} profile`
    });
});






// Start server
const PORT = process.env.PORT || 3000;

console.log('About to start Express server...');

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});