const apiKey = 'af9c81ab03d2903e1aa375a7e6f24399';
const apiUrl = 'https://api.themoviedb.org/3';



// Function to fetch popular movies
async function fetchPopularMovies() {
    try {
        const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}`);
        const data = await response.json();

        // Display movies
        displayMovies(data.results);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to display movies in HTML
function displayMovies(movies) {
    const movieContainer = document.getElementById('movie-container');

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const title = document.createElement('h2');
        title.textContent = movie.title;

        const overview = document.createElement('p');
        overview.textContent = movie.overview;

        const releaseDate = document.createElement('p');
        releaseDate.classList.add("release-date")
        releaseDate.textContent = `Release Date: ${movie.release_date}`;

        const poster = document.createElement('img');
        const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
        poster.src = baseImageUrl + movie.backdrop_path;
        poster.alt = movie.title;
        
        const voteAverage = document.createElement('p');
        voteAverage.classList.add("vote-average")
        voteAverage.textContent = `Vote Average: ${movie.vote_average}`

        movieCard.appendChild(title);
        movieCard.appendChild(poster);
        movieCard.appendChild(voteAverage);
        movieCard.appendChild(overview);
        movieCard.appendChild(releaseDate);

        movieContainer.appendChild(movieCard);
    });
}

// Fetch popular movies when the page loads
window.onload = fetchPopularMovies;












  