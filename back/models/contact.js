const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    shouldAddToNewsletter: Boolean,
    created: Date,
    largerPhoneNumber: Number
});

mongoose.model('Contact', contactSchema);