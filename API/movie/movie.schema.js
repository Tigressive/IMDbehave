const mongoose = require('mongoose');
const director = require('../director/dircector.schema')

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
        type: director,
        unique: false,
        required: true
    },


});

module.exports = movieSchema;
