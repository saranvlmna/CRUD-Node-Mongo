const express = require('express');
const controller = require('../controllers/movies');
const movie = new express.Router()    

movie.get('/', controller.getMovies);
movie.post('/', controller.createMovie);
movie.put('/:id', controller.updateMovie);
movie.delete('/:id', controller.deleteMovie);

module.exports = movie;