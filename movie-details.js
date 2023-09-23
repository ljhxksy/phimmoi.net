function fetchMovieDetails() {

    fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=en-US`)
        .then((response) => response.json())
        .then((data) => {
            console.log("LMAO");
            console.log(MOVIE_ID);
            console.log(data);
            const movieDetails = document.getElementById('movie-details');
            // Replace the following with the actual data from the API response
            movieDetails.innerHTML = `
          <h1 class="movie-title">${data.title}</h1>
          <p class="movie-description">${data.overview}</p>
          <p><strong>Release Date:</strong> ${data.release_date}</p>
          <p><strong>Genre:</strong> ${data.genres.map((genre) => genre.name).join(', ')}</p>
          <p><strong>Director:</strong> John Doe</p>
          <p><strong>Cast:</strong> Actor 1, Actor 2, Actor 3</p>
          <p><strong>Runtime:</strong> ${data.runtime} minutes</p>
          <p><strong>IMDb Rating:</strong> ${data.vote_average}/10</p>
        `;
        })
        .catch((error) => {
            console.error('Error fetching movie details:', error);
        });
}

// Call the function to fetch movie details when the page loads
window.onload = fetchMovieDetails;
