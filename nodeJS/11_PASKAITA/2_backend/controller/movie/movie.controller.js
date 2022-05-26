const Movie = require('../../model/movie.model.js');
const MESSAGES = require('../../shared/constants.js');

// GET => get all movies
const getMovies = async (req, res) => {
  let movies = await Movie.find();
  if (req.query.page) {
    if (req.query.text) {
      movies = movies.filter((movie) => movie.name.includes(req.query.text));
    }
    const page = +req.query.page;
    const limit = 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedData = movies.slice(startIndex, endIndex);
    res.json(paginatedData);
  } else {
    res.json(movies);
  }
};

// POST => add new movie
const createMovie = async (req, res) => {
  try {
    const newMovieData = req.body;

    const validatedMovie = new Movie(newMovieData);
    const newMovie = await validatedMovie.save();

    if (!newMovie) res.status(400).json({ message: MESSAGES.failure('saved') });
    res.json({ message: MESSAGES.success('saved') });
  } catch (error) {
    console.log(error);
  }
};

// PUT => update single movie
const updateMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const dataToUpdate = req.body;

    const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate);

    if (!updatedMovie)
      res.status(400).json({ message: MESSAGES.failure('updated') });
    res.json({ message: MESSAGES.success('updated') });
  } catch (error) {
    console.log(error);
  }
};

// DELETE => delete single movie
const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const deletedMovie = await Movie.findByIdAndDelete(movieId);

    if (!deletedMovie)
      res.status(400).json({ message: MESSAGES.failure('deleted') });
    res.json({ message: MESSAGES.success('deleted') });
  } catch (error) {
    console.log(error);
  }
};

const getMoviesBy = async (req, res) => {
  const movieCategory = req.params.category;
  const moviePrice = req.params.price;

  const movies = await Movie.find({
    category: movieCategory,
    rentPrice: moviePrice,
  });
  res.json(movies);

  res.end();
};

module.exports = {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  getMoviesBy,
};
