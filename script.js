// Global Constants
const apiKey = '03a0bef92ef5c5949f333c1f4de9ffbf';
const pageSize = 12;

// Global Variables
var currApiPage = 0;
var currSearchTerm = '';

// Page Elements
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const movieAreaDiv = document.getElementById('movie-area');
const showMeMoreBtn = document.getElementById('show-me-more-btn');

/** Get results from API. */
async function getData() {
    url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`

    //imgUrl = 'https://api.themoviedb.org/3/search/movie/?movie_id=${movie_id}/images?api_key=${apiKey}'
    var data = await fetch(url);
    var jsonData = await data.json();
    console.log(jsonData);
    // return jsonData.data;
    displayMovies(data.results);
}
console.log(getData())


/** Render list of results.  */
function displayMovies(movies) {
    movies.forEach(function(movie) {
        movieAreaDiv.innerHTML =
        `<div class="img">
            <img src="${movie_id}" />
        </div>
    `).join('');
    movieAreaDiv.innerHTML += imgHTMLString;
    })
    // movieAreaDiv.innerHTML = data.forEach(img => `
    //     <div class="img">
    //         <img src="${movie_id}" />
    //     </div>
    // `).join('');
    // movieAreaDiv.innerHTML += imgHTMLString;
}

function getMovieTemplate(movie) {
    return `<image src=${movie.img} />
            <span>${movie.name}</span>`
}

/** On form submit, get results and add to list. */
async function handleFormSubmit(event) {
    event.preventDefault();
    movieAreaDiv.innerHTML = '';
    currSearchTerm = searchInput.value;
    const results = await getData(currSearchTerm);
    displayResults(results);
    searchInput.value = '';
    currApiPage++;
    showMeMoreBtn.classList.remove('hidden');
}

searchForm.addEventListener('submit', handleFormSubmit);

async function handleShowMeMoreClick(event) {
    const results = await getData(currSearchTerm);
    displayResults(results);
    currApiPage++;
}

showMeMoreBtn.addEventListener('click', handleShowMeMoreClick);