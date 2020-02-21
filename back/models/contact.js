const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: Number,
    shouldAddToNewsletter: Boolean
});

mongoose.model('Contact', contactSchema);