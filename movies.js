document.getElementById('search-button').addEventListener('click', function () {
    const searchTerm = document.getElementById('searchInput').value.trim();

    // Check if the search input is empty
    if (searchTerm === '') {
        return;
}
})


const apiKey = 'af9c81ab03d2903e1aa375a7e6f24399';

const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

// Function to fetch and display Now Playing movies
function fetchNowPlayingMovies() {
    fetch(nowPlayingUrl)
        .then(response => response.json())
        .then(data => {
            displayNowPlayingMovies(data.results);
        })
        .catch(error => console.error('Error fetching Now Playing movies:', error));
}

// Function to display Now Playing movies
function displayNowPlayingMovies(movies) {
    const nowPlayingContainer = document.getElementById('now-playing-container');
    nowPlayingContainer.innerHTML = ''; // Clear previous results

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        // Display title
        const titleElement = document.createElement('h3');
        titleElement.textContent = movie.title;
        movieElement.appendChild(titleElement);

        // Display image 

        const imgUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
        const imgElement = document.createElement('img');
        imgElement.src = imgUrl;
        imgElement.alt = movie.title;
        movieElement.appendChild(imgElement);

        nowPlayingContainer.appendChild(movieElement);
    });
}

fetchNowPlayingMovies();