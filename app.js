// app.js
const express = require('express');  // Importing Express
const path = require('path');        // To handle file paths
const app = express();               // Initializing the Express application
const port = 3000;                   // Setting the port to run the server

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
// Middleware to serve static files (CSS and JavaScript)
app.use(express.static(path.join(__dirname)));

// Routes to serve HTML pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'contact.html')));

// Handle form submission from Contact page
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Validate form fields
    if (!name || !email || !message) {
        res.send("All fields are required. Please go back and fill out the form completely.");
    } else {
        res.send(`Thank you, ${name}! Your message has been received. We will contact you at ${email} soon.`);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
