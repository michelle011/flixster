/* Global Constants */
const apiKey = '03a0bef92ef5c5949f333c1f4de9ffbf'
const baseUrl = 'https://api.themoviedb.org/3/'
const imageUrl = 'https://image.tmdb.org/t/p/original'
let pageSize = 20;

/* Page Elements
Key: use querySelector in place of getElementByID for more versatility in CSS */
const searchbar = document.querySelector('#search-bar')
const query = document.querySelector('#search-input')
const queryTitle = document.querySelector('#search-title')
const movieArea = document.querySelector('#movies-grid')
const nowPlaying = document.querySelector('#now-playing')

const showMeMoreBtn = document.querySelector('#load-more-movies-btn')
const exitSearchBtn = document.querySelector('#exit-search-btn')

// Global Variables
let currApiPage = 1;
let currQuery = ''

/* Listen for separate user actions */
searchbar.addEventListener('submit', handleFormSubmit)
exitSearchBtn.addEventListener('click', exitSearch)
showMeMoreBtn.addEventListener('click', showMeMore)

/* Allow JS to wait while API retrieves data */
window.onload = displayCurrentMovies

/* Gets currently playing movies */
async function displayCurrentMovies(event) {
    event.preventDefault();
    let response = await fetch(baseUrl + 'movie/now_playing?api_key=' + apiKey + '&language=en-US&page=' + currApiPage);
    console.log(response);

    let responseData = await response.json();
    console.log(responseData);

    displayResults(responseData.results);
    addEventListenersToCards();

    currApiPage++;
}

 /* On form submit, get results and add to list. */
async function searchResults() {
    currQuery = query.value

    // Display only titles relevant to search
    queryTitle.classList.remove('hidden')
    exitSearchBtn.classList.remove('hidden')
    queryTitle.innerHTML = `
    Showing all titles with: "${currQuery}"
    `
    nowPlaying.classList.add('hidden')

    let response = await fetch(baseUrl + 'search/movie?api_key=' + apiKey + '&language=en-US&query=' + currQuery + '&page=' + currApiPage + '&include_adult=false')
    let responseData = await response.json()

    if (responseData.results.length != 0) {  // display relevant movies as available
        displayResults(responseData.results)
    }
    else if (currApiPage == 1) {  
        movieArea.innerHTML = `
        <h2>No results for</h2>
        <h2>"${currQuery}"</h2>
        <h2>No movies with the search term '${currQuery}' found.</h2>`
        showMeMoreBtn.classList.add('hidden')
    }

    else {
        movieArea.innerHTML += `
        <div>
        <h2>No more results for </h2>
        <h2>"${currQuery}."</h2>
        </div>`
        showMeMoreBtn.classList.add('hidden')
    }
    addEventListenersToCards();
    currApiPage++;

}

function displayResults(results) {
    // Adds each movie in the array
    results.forEach((movie, index) => {
        movieArea.innerHTML += `
        <div class='movie-card' id='${(currApiPage * pageSize) + index}'>
            <img src=${imageUrl + movie.poster_path} class=movie-poster alt='${movie.original_title}' title='${movie.original_title}' width=100%>
            <p class='movie-votes'>⭐️ ${movie.vote_average}</p>
            <p class='movie-title'>${movie.title}</p>
        </div>
        `
    })
}

/* Handles search form entries */
function handleFormSubmit(event) {
    event.preventDefault()
    if (movieArea) {  // display search results on clean page
        movieArea.innerHTML = ''
    }
    currApiPage = 1;
    searchResults()
}

/* Exits search and reverts to landing page */
function exitSearch(event) {
    queryTitle.classList.add('hidden')  // Revert to current titles
    exitSearchBtn.classList.add('hidden')
    nowPlaying.classList.remove('hidden')

    movieArea.innerHTML = '' // reset page
    query.value = ''
    currApiPage = 1;

    displayCurrentMovies(event)
}

/* Shows move movies! */
function showMeMore(event) {
    if (!(queryTitle.classList.contains('hidden'))) {  // query-specific
        searchResults()
    } 
    else {
    displayCurrentMovies(event)
    }
}

/* Add event listener to movie card */
function addEventListenersToCards() {
    const movieCardQS = document.querySelectorAll(".movie-card")
    movieCardQS.forEach(card => {
        card.addEventListener("click", () => generateCard(card))
    })
}
