const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');

const {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  getMoviesBy,
} = require('./controller/movie/movie.controller.js');

require('dotenv').config();

// -- Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.DOMAIN || 'http://127.0.0.1:5500',
  })
);

// -- Connecting to database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connecting to mongodb');

    // -- Starting server
    app.listen(process.env.PORT, () => console.log('Starting server'));
  })
  .catch((error) => console.log(error));

// -- Routes
// GET => get all movies
app.get('/api/movies', getMovies);

// POST => add new movie
app.post('/api/movies', createMovie);

// PUT => update single movie
app.put('/api/movies/:id', updateMovie);

// DELETE => delete single movie
app.delete('/api/movies/:id', deleteMovie);

// GET => get movies by category or price
app.get('/api/movies/:category/:price', getMoviesBy);
