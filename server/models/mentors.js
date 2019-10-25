const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: String,
    technology: { type: Array, default: [] },
    country: String,
    biography: String
});

module.exports = mongoose.model('Mentor', mentorSchema);