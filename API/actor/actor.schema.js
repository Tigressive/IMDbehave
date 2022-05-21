const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
        name: {
            type: String,
            unique: false,
            required: true
        },
        age: {
            type: Number,
            unique: false,
            required: false
        },
        country: {
            type: String,
            unique: false,
            required: false
        },
        movies: {
            type: Array,
            unique: false,
            required: false
        }
    }
);

module.exports = actorSchema;
