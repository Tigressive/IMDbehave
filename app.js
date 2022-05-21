// // What are the common API functions?
// Create  // POST
// Read // GET
// Update // POST PUT
// Delete  // DELETE

const express = require('express');
require('dotenv').config();
const db = require('./db');
const server = express();

db();

server.use(express.json());

// import all of my DAOs
const Actor = require('./API/actor/actor.dao');
const Director = require('./API/director/director.dao');
const Movie = require('./API/movie/movie.dao');

// import the router factory function
const routerFactory= require('./API/router');


// use routes
server.use('/', routerFactory(Actor, Director, Movie));

server.listen(process.env.PORT, () => {
    const {PORT} = process.env;
    console.log('Server listening on port 3000...');
});
