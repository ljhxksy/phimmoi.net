function fetchPopularMovies() {

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const movieList = document.getElementById('movie-list');

            data.results.forEach((movie) => {
                const movieCard = document.createElement('a');
                movieCard.classList.add('movie-card');
                movieCard.href = `./movie_details/movie_details.html?movieId=${movie.id}`;
                movieCard.innerHTML = `
                    <div class="movie-header" style="background: url('https://image.tmdb.org/t/p/w500/${movie.poster_path}');
                    background-size: cover;
                    background-position: 100% 80%;">
                    </div>
                    <div class="movie-content">
                        <div class="movie-content-header">
                            <h3 class="movie-title">${movie.title}</h3>
                            <div class="movie-year">
                                <p>${movie.release_date.substring(0, 4)}</p>
                            </div>
                        </div>
                    </div>
                `;

                movieList.appendChild(movieCard);
            });
        })
        .catch((error) => {
            console.error('Error fetching popular movies:', error);
        });
}

window.onload = fetchPopularMovies;
