const apiKey = 'af9c81ab03d2903e1aa375a7e6f24399';

document.getElementById('search-button').addEventListener('click', function () {
    const searchTerm = document.getElementById('searchInput').value;
    if (searchTerm === '') {
        return;
    }



    let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`;
    


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displaySearchResults(data.results);
            document.getElementById('searchInput').value = '';
        })
        .catch(error => console.error('Error searching:', error));

});

function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('search-result');

        let imgUrl = `https://image.tmdb.org/t/p/w200${result.poster_path}`;
        if (!result.poster_path) {
            imgUrl = "images/noimage.png"

        }
        const imgElement = document.createElement('img');
        imgElement.src = imgUrl;
        resultElement.appendChild(imgElement);

        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('details-container');
        resultElement.appendChild(detailsContainer);


        const titleElement = document.createElement('h3');
        titleElement.textContent = result.title;
        detailsContainer.appendChild(titleElement);

        const releaseDateElement = document.createElement('p');
        releaseDateElement.classList.add('release-date');
        releaseDateElement.textContent = `Release Date: ${result.release_date}`;
        detailsContainer.appendChild(releaseDateElement);

        const overviewElement = document.createElement('p');
        overviewElement.classList.add("overview")
        overviewElement.textContent = result.overview;
        detailsContainer.appendChild(overviewElement);

        const voteAverageElement = document.createElement('p');
        voteAverageElement.classList.add("vote-average")
        voteAverageElement.textContent = `⭐Vote Average: ${result.vote_average}⭐`;
        detailsContainer.appendChild(voteAverageElement);


        searchResultsContainer.appendChild(resultElement);
    });
}