const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: String,
    number: String,
    email: String
});

module.exports = new mongoose.model('clients',
                                    clientSchema);