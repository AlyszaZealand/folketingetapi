const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    navn: {
        type: String,
        required: true
    },
    titel: {
        type: String,
        required: true
    },
    parti: {
        type: String,
        required: true
    },
    startdato: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Person', personSchema, 'folketingetdb');