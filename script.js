const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const resultsContainer = document.querySelector(".results");

// Fetch movie data from API
async function fetchMovieData(query) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fa2ce046bc2f93fcc0e81f3e009418d4&query=${query}`);
  const data = await response.json();
  return data.results;
}

// Display movie results
function displayMovieResults(movies) {
  resultsContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const movieImg = document.createElement("img");
    movieImg.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    movieCard.appendChild(movieImg);

    resultsContainer.appendChild(movieCard);
  });
}

// Search for movies
searchButton.addEventListener("click", async () => {
  const query = searchInput.value;

  const movies = await fetchMovieData(query);

  displayMovieResults(movies);
});
