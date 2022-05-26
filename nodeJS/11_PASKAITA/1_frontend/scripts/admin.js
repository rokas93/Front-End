import api from './api/api.js';
import removeChilds from './helpers/cleaners.js';

// VARIABLES
const addMovieFormElement = document.querySelector('#add-movie-form');
const formSubmitMessageElement = document.querySelector('#form-submit-message');
const movieListContainerElement = document.querySelector(
  '#movie-list-container'
);
const movieUpdateDeleteMessageElement = document.querySelector(
  '#movie-update-delete-message'
);
const paginationContainerElement = document.querySelector(
  '#pagination-container'
);

// -- logic
const FILMS_PER_PAGE = 10;

// FUNCTIONS
const generatePaginationButtons = async (filmsPerPage) => {
  removeChilds(paginationContainerElement);

  const data = await api.getData();
  const totalPages = Math.ceil(data.length / filmsPerPage);

  for (let i = 0; i < totalPages; i++) {
    const paginationButton = document.createElement('button');
    paginationButton.innerText = [i + 1];
    paginationButton.addEventListener('click', () => {
      getMovies([i + 1]);
    });
    paginationContainerElement.appendChild(paginationButton);
  }
};

const addMovie = async (e) => {
  e.preventDefault();

  const movie = {
    name: e.target.movieName.value,
    category: e.target.movieCategory.value,
    rentPrice: +e.target.movieRentPrice.value,
  };

  const response = await api.sendData(movie);
  formSubmitMessageElement.innerText = response.message;
  formSubmitMessageElement.classList.add('message');
  addMovieFormElement.reset();
  getMovies();
  generatePaginationButtons(FILMS_PER_PAGE);
};

const getMovies = async (page = 1, text = '') => {
  const data = await api.getPageData(page, text);
  showMovies(data);
};

const showMovies = (moviesArr) => {
  removeChilds(movieListContainerElement);

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const theadRow = document.createElement('tr');
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  const th3 = document.createElement('th');
  const th4 = document.createElement('th');
  const th5 = document.createElement('th');

  th1.innerText = 'Movie name';
  th2.innerText = 'Movie category';
  th3.innerText = 'Movie rent price';
  th4.innerText = 'Update';
  th5.innerText = 'Delete';

  theadRow.append(th1, th2, th3, th4, th5);
  thead.appendChild(theadRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  moviesArr.forEach((movie) => {
    const tbodyRow = document.createElement('tr');
    tbodyRow.setAttribute('id', movie._id);

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');

    td1.innerText = movie.name;
    td2.innerText = movie.category;
    td3.innerText = movie.rentPrice.toFixed(2) + '€';

    td1.setAttribute('contenteditable', 'true');
    td2.setAttribute('contenteditable', 'true');
    td3.setAttribute('contenteditable', 'true');

    td1.setAttribute('id', 'movieName');
    td2.setAttribute('id', 'movieCategory');
    td3.setAttribute('id', 'movieRentPrice');

    const updateButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    updateButton.innerText = 'Update';
    deleteButton.innerText = 'Delete';

    updateButton.setAttribute('data-movie-id', movie._id);
    deleteButton.setAttribute('data-movie-id', movie._id);

    updateButton.addEventListener('click', updateMovie);
    deleteButton.addEventListener('click', deleteMovie);

    td4.appendChild(updateButton);
    td5.appendChild(deleteButton);

    tbodyRow.append(td1, td2, td3, td4, td5);
    tbody.appendChild(tbodyRow);
  });

  table.appendChild(tbody);

  movieListContainerElement.appendChild(table);
};

const updateMovie = async (e) => {
  const { movieId } = e.target.dataset;

  const trs = document.querySelectorAll('tr');
  const trToUpdate = Array.from(trs).find((tr) => tr.id === movieId);

  const movie = {
    name: trToUpdate.children[0].innerText,
    category: trToUpdate.children[1].innerText,
    rentPrice: +trToUpdate.children[2].innerText.substring(
      0,
      trToUpdate.children[2].innerText.length - 4
    ),
  };

  const response = await api.updateData(movieId, movie);
  movieUpdateDeleteMessageElement.innerText = response.message;
  movieUpdateDeleteMessageElement.classList.add('message');
};

const deleteMovie = async (e) => {
  const { movieId } = e.target.dataset;

  const response = await api.deleteData(movieId);

  movieUpdateDeleteMessageElement.innerText = response.message;
  movieUpdateDeleteMessageElement.classList.add('message');
  getMovies();
  generatePaginationButtons(FILMS_PER_PAGE);
};

// EVENTS
document.addEventListener('DOMContentLoaded', () => {
  getMovies(), generatePaginationButtons(FILMS_PER_PAGE);
});

addMovieFormElement.addEventListener('submit', addMovie);
