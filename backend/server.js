require('events').EventEmitter.defaultMaxListeners = 15; // Set a higher limit
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Database');
const submitForm = require('./controllers/submissionController');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


const PORT = process.env.PORT || 3001;
// Connect to MongoDB
connectDB();

// Endpoint for handling form submissions
app.post('/submit', submitForm);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
