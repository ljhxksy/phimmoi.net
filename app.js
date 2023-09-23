const logout = () => {
    localStorage.removeItem("currentUser");
    location.reload();
};

const API_KEY = "97eeb2086650f1bbdb0b8922de2f56e8";
// const MOVIE_ID = '346698';
function fetchMovieDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movieId');
    
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,images&language=en-US`)
        .then(response => response.json())
        .then(data => {
            const movieDetails = document.getElementById('movie-details');
            const moviePoster = document.querySelector('.movie-poster');
            console.log(data);
            moviePoster.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
            movieDetails.innerHTML = `
            
            <h1 class="movie-title">${data.title}</h1>
            <button class="watch-button">Watch Now</button>
            <button class="watch-button">
                <a href="https://youtu.be/zRlkHu-R7yI?si=YjEqFD1bbb5W4YYL">Trailer</a>
            </button>
            <p class="movie-description">${data.overview}</p>
            <p><strong>Release Date:</strong> ${data.release_date}</p>
            <p><strong>Genre:</strong> ${data.genres.map((genre) => genre.name).join(', ')}</p>
            <p><strong>Runtime:</strong> ${data.runtime} minutes</p>
            <p><strong>IMDb Rating:</strong> ${data.vote_average}/10</p>
            `
        })
        .catch((error) => {
            console.error('Error fetching movie details:', error);
        });
    }


    window.onload = fetchMovieDetails;
