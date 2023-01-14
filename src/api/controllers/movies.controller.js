const Movie = require('../models/movies.model');


const getAllMovies = async(req, res) => {
    try {
        const myMovie = await Movie.find().populate('heroes');
        return res.status(200).json(myMovie)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getOneMovie = async(req, res) => {
    try {
        const {id} = req.params;    
        const myMovie = await Movie.findById(id).populate('heroes');
        return res.status(200).json(myMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getMovieName = async(req, res) => {
    try {
        const {title} = req.params;
        if(title){
            const myMovie = await Movie.find({"title" : { $regex : RegExp(`^${title}$`, 'i' )}}).populate('heroes');
        console.log(title);
        return res.status(200).json(myMovie)
        }  else{
            return res.status(404).send("tienes que enviar un titulo")
        }         
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getMovieGenre = async(req, res) => {
    try {
        const {genre} = req.params;
        if(genre){
            const myMovie = await Movie.find({"genre" : { $regex : RegExp(`^${genre}$`, 'i' )}});
        console.log(genre);
        return res.status(200).json(myMovie)
        }  else{
            return res.status(400).send("tienes que enviar un titulo")
        }         
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getMovieYear = async(req, res) => {
    try {
        const {year} = req.params;
        if(year){
            const myYearMovie = await Movie.find({ year: {$gt:2010} });
        return res.status(200).json(myYearMovie)
        }  else{
            return res.status(400).send("tienes que enviar un año")
        }         
    } catch (error) {
        return res.status(500).json(error);
    }
};







module.exports = {getAllMovies, getOneMovie, getMovieName, getMovieGenre, getMovieYear};