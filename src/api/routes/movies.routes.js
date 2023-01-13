const express = require('express');
const {getAllMovies, getOneMovie, getMovieName, getMovieGenre, getMovieYear} = require('../controllers/movies.controller');

const router = express.Router();


router.get('/',  getAllMovies);
router.get('/title/:title', getMovieName);
router.get('/title', getMovieName);
router.get('/genre/:genre', getMovieGenre);
router.get('/year/:year', getMovieYear);
router.get('/:id',  getOneMovie);



module.exports = router;