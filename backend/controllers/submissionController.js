const express = require('express');
const router = express.Router();
const multer = require('multer');
const validator = require('validator');
const bcrypt = require('bcrypt');
const Submission = require('../models/Submission');

// Set up Multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/submit', upload.single('image'), async (req, res) => {
  try {
    const { name, phone, message } = req.body;
    console.log('Received form data:', { name, phone, message });
    // Validate input data
    if (!name || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate phone number
    if (!validator.isMobilePhone(phone, 'any', { strictMode: false })) {
      return res.status(400).json({ error: 'Invalid phone number' });
    }

    // Sanitize input data
    const sanitizedName = validator.escape(name);
    const sanitizedPhone = validator.escape(phone);
    const sanitizedMessage = validator.escape(message);

    // Hash the phone number
    const hashedPhone = await bcrypt.hash(sanitizedPhone, 10);

    // Create a new submission
    const newSubmission = new Submission({
      name: sanitizedName,
      phone: sanitizedPhone,
      hashedPhone,
      message: sanitizedMessage,
    });

    // If there's an uploaded image, add it to the submission
    if (req.file) {
      newSubmission.image = req.file.buffer; // Assuming you want to store the image as a buffer
    }
    console.log('New submission:', newSubmission);
    // Save the submission to the database
    await newSubmission.save();

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    if (error instanceof multer.MulterError) {
      // Multer error
      res.status(400).json({ error: 'File upload error' });
    } else {
      // Other errors
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  }
});

module.exports = router;
