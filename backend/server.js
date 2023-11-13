require('events').EventEmitter.defaultMaxListeners = 15; // Set a higher limit
const express = require('express');
const path = require('path'); // Import path module
const connectDB = require('./Database');
const submitForm = require('./controllers/submissionController');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Serve static files from the React app (assuming your frontend build is in a "build" folder)
app.use(express.static(path.join(__dirname, 'build')));

const PORT = process.env.PORT || 3001;
// Connect to MongoDB
connectDB();

// Endpoint for handling form submissions
app.post('/submit', submitForm);

// Serve your React app on all routes (except those handled by other routes like /submit)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
