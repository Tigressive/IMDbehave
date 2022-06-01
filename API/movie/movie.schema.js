const mongoose = require('mongoose');
const director = require('../director/director.schema')

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    yearReleased: {
        type: Number,
        unique: false,
        required: true
    },
    director: {
        type: String,
        unique: false,
        required: true
    },


});

module.exports = movieSchema;
