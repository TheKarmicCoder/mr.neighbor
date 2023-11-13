const mongoose = require('mongoose')

const submissionSchema = new mongoose.Schema({
  name: String,
  phone: String,
  hashedPhone: String,
  message: String,
  image: String,
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;