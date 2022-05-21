const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
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
        firstMovie: {
            type: String,
            unique: false,
            required: true
        },
        movies: {
            type: Array,
            unique: false,
            required: false
        }
    }
);

module.exports = directorSchema;
