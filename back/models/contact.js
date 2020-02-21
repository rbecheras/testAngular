const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    shouldAddToNewsletter: Boolean
});

mongoose.model('Contact', contactSchema);