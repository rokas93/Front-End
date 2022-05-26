import api from './api/api.js';
import removeChilds from './helpers/cleaners.js';

// VARIABLES
// -- dom elements
const moviesContainerElement = document.querySelector('#movies-container');
const moviesFilterByCategoryElement = document.querySelector(
  '#movies-filter-by-category'
);
const moviesFilterByPriceElement = document.querySelector(
  '#movies-filter-by-price'
);
const paginationContainerElement = document.querySelector(
  '#pagination-container'
);

const formElement = document.querySelector('form');
const inputElement = document.querySelector('#search');

// -- logic
let movies = [];
let moviesInPage = [];
let selectedCategory = 'all-movies';
const FILMS_PER_PAGE = 10;

// FUNCTIONS
// -- generates pagination buttons which depends of movies amount
const generatePaginationButtons = (moviesArr, filmsPerPage) => {
  removeChilds(paginationContainerElement);

  const totalPages = Math.ceil(moviesArr.length / filmsPerPage);

  if (totalPages > 1) {
    for (let i = 0; i < totalPages; i++) {
      const paginationButton = document.createElement('button');
      paginationButton.innerText = [i + 1];

      paginationButton.addEventListener('click', () => {
        getMoviesByPage([i + 1]);
        removeChilds(moviesFilterByCategoryElement);
        removeChilds(moviesFilterByPriceElement);
      });
      paginationContainerElement.appendChild(paginationButton);
    }
  }
};

// -- get movies data from the page
const getMoviesByPage = async (page = 1, text = '') => {
  const data = await api.getPageData(page, text);

  moviesInPage = data;
  generateOptionTags(data);
  showMovies(data);
};

// -- get all movies data
const getMovies = async () => {
  const data = await api.getData();

  movies = data;
  generatePaginationButtons(data, FILMS_PER_PAGE);
};

// -- generate <option> tags for <select>
const generateOptionTags = (moviesArr, filterType = null) => {
  // -- for category filter
  if (filterType === null) {
    const categoriesArr = new Set(moviesArr.map((movie) => movie.category));

    // -- creating 'All movies' option
    const allMoviesOption = document.createElement('option');
    allMoviesOption.setAttribute('value', 'all-movies');
    allMoviesOption.innerText = 'All movies';

    moviesFilterByCategoryElement.appendChild(allMoviesOption);

    // -- creating other options based on 'categoriesArr'
    categoriesArr.forEach((category) => {
      const option = document.createElement('option');
      option.setAttribute('value', category.toLowerCase());
      option.innerText = category;

      moviesFilterByCategoryElement.appendChild(option);
    });
  }
  // -- for price filter

  if (filterType === null || filterType === 'category') {
    if (filterType === 'category') {
      removeChilds(moviesFilterByPriceElement);
    }

    const rentPricesArr = new Set(
      moviesArr.map((movie) => movie.rentPrice).sort((a, b) => a - b)
    );

    // -- creating 'All prices' option
    const allPricesOption = document.createElement('option');
    allPricesOption.setAttribute('value', 'all-prices');
    allPricesOption.innerText = 'All prices';

    moviesFilterByPriceElement.appendChild(allPricesOption);

    // -- creating other options based on 'categoriesArr'
    rentPricesArr.forEach((price) => {
      const option = document.createElement('option');
      option.setAttribute('value', price);
      option.innerText = `${price.toFixed(2)}€`;

      moviesFilterByPriceElement.appendChild(option);
    });
  }
};

// -- show movies
const showMovies = (moviesArr) => {
  removeChilds(moviesContainerElement);

  moviesArr.forEach((movie) => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const pForCategory = document.createElement('p');
    const pForPrice = document.createElement('p');

    h4.innerText = movie.name;
    pForCategory.innerText = `Category: ${movie.category}`;
    pForPrice.innerText = `Rent price: ${movie.rentPrice.toFixed(2)} €`;

    div.append(h4, pForCategory, pForPrice);
    moviesContainerElement.appendChild(div);
  });
};

// -- filter movies
// --- by category
const filterMoviesByCategory = (e) => {
  const currentCategory = e.target.value; // currentCategory[0].toUpperCase();

  selectedCategory = currentCategory;

  if (currentCategory === 'all-movies') {
    showMovies(moviesInPage);
    generateOptionTags(moviesInPage, 'category');
    generatePaginationButtons(movies, FILMS_PER_PAGE);
    return;
  } else {
    const filteredMovies = moviesInPage.filter(
      (movie) =>
        movie.category ===
        currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)
    );

    showMovies(filteredMovies);
    generateOptionTags(filteredMovies, 'category');
    generatePaginationButtons(filteredMovies, FILMS_PER_PAGE);
  }
};

// --- by price
const filterMoviesByPrice = (e) => {
  const currentPrice = e.target.value;

  if (currentPrice === 'all-prices' && selectedCategory === 'all-movies') {
    showMovies(moviesInPage);
    generatePaginationButtons(movies, FILMS_PER_PAGE);
    return;
  } else if (currentPrice === 'all-prices') {
    let filteredMovies = moviesInPage.filter(
      (movie) => movie.category.toLowerCase() === selectedCategory
    );

    showMovies(filteredMovies);
    generatePaginationButtons(filteredMovies, FILMS_PER_PAGE);
    return;
  }

  let filteredMovies;

  if (selectedCategory && selectedCategory !== 'all-movies') {
    filteredMovies = moviesInPage.filter(
      (movie) =>
        movie.rentPrice === +currentPrice &&
        movie.category.toLowerCase() === selectedCategory
    );
  } else {
    filteredMovies = moviesInPage.filter(
      (movie) => movie.rentPrice === +currentPrice
    );
  }

  showMovies(filteredMovies);
  generatePaginationButtons(filteredMovies, FILMS_PER_PAGE);
};

// EVENTS
document.addEventListener('DOMContentLoaded', () => {
  getMoviesByPage();
  getMovies();
});
moviesFilterByCategoryElement.addEventListener(
  'change',
  filterMoviesByCategory
);

moviesFilterByPriceElement.addEventListener('change', filterMoviesByPrice);

formElement.addEventListener('submit', async () => {
  const inputValue = inputElement.value;

  removeChilds(moviesFilterByCategoryElement);
  removeChilds(moviesFilterByPriceElement);

  if (!inputValue) {
    getMoviesByPage();
    getMovies();
  } else {
    getMoviesByPage(undefined, inputValue);
    generatePaginationButtons(moviesInPage, FILMS_PER_PAGE);

    console.log(moviesInPage);

    event.preventDefault();
  }
});
