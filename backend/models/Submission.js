const mongoose = require('mongoose')

const submissionSchema = new mongoose.Schema({
  name: String,
  phone: String,
  hashedPhone: String, // Store hashed phone for security
  message: String,
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;