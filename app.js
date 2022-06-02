// // What are the common API functions?
// Create  // POST
// Read // GET
// Update // POST PUT
// Delete  // DELETE

const express = require('express');
require('dotenv').config();
const db = require('./db');
const server = express();
const pug = require('pug');
server.set('view engine', 'pug');

db();

server.use(express.json());

// import all of my DAOs
const Actor = require('./API/actor/actor.dao');
const Director = require('./API/director/director.dao');
const Movie = require('./API/movie/movie.dao');

// import the router factory function
const routerFactory= require('./API/router');


// use routes
server.use('/api', routerFactory([Actor, Director, Movie]));

server.get('/', (req, res, next) => {
    res.render('tables', {});
});



//Movie
server.get('/movie', (req, res) => {
    Movie.read({}, (err, movies) => {
        if (err) {
            res.render('error', {});
            return;
        }
        res.render('movies', {movies});
    });
});

server.get('/movie/:id', (req, res) => {
    const { id } = req.params;
    if (id === 'new')
    {
        res.render('edit_movie', {});
        return;
    }
    Movie.read({_id: id}, (err, movie) => {
        if (err)
        {
            console.log(err);
            res.render('error', {
                message: 'Something clever',
            });
            return;
        }
        let data = movie[0];
        console.log('data: ', data);
        res.render('edit_movie', data);
    });
});


//Actor
server.get('/actor', (req, res) => {
    Actor.read({}, (err, actors) => {
        if (err) {
            res.render('error', {});
            return;
        }
        res.render('actors', {actors});
    });
});

server.get('/actor/:id', (req, res) => {
    const { id } = req.params;
    if (id === 'new')
    {
        res.render('edit_actor', {});
        return;
    }
    Actor.read({_id: id}, (err, actor) => {
        if (err)
        {
            console.log(err);
            res.render('error', {
                message: 'Something clever',
            });
            return;
        }
        let data = actor[0];
        console.log('data: ', data);
        res.render('edit_actor', data);
    });
});


//Director
server.get('/director', (req, res) => {
    Director.read({}, (err, directors) => {
        if (err) {
            res.render('error', {});
            return;
        }
        res.render('directors', {directors});
    });
});

server.get('/director/delete/:id', (req, res) => {
    Director.delete({}, (err, directors) => {
        if(err) {
            res.render('error', {});
            return;
        }
        res.redirect('/director');
    });
});

server.get('/director/:id', (req, res) => {
    const { id } = req.params;
    if (id === 'new')
    {
        res.render('edit_director', {});
        return;
    }

    Director.read({_id: id}, (err, director) => {
        if (err)
        {
            console.log(err);
            res.render('error', {
                message: 'Something clever',
            });
            return;
        }
        let data = director[0];
        console.log('data: ', data);
        res.redirect('/director');
    });
});



server.listen(process.env.PORT, () => {
    const {PORT} = process.env;
    console.log('Server listening on port 3000...');
});
