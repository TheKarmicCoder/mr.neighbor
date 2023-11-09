const validator = require('validator');
const bcrypt = require('bcrypt');
const Submission = require('../models/Submission');

const submitForm = async (req, res) => {
  try {
    const { name, phone, message } = req.body;

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

    // Save the submission to the database
    await newSubmission.save();

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = submitForm;
