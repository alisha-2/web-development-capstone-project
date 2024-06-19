// Sample movie data (replace with actual API or data source)
const movies = [
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },
    {
        title: "Inception",
        genre: "Action, Adventure, Sci-Fi",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
        title: "The Dark Knight",
        genre: "Action, Crime, Drama",
        description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    }
];

// Function to display movies
function displayMovies() {
    const movieList = document.getElementById("movieList");

    movies.forEach(movie => {
        // Create card element
        let card = document.createElement("div");
        card.classList.add("card");

        // Create card content
        let cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        // Create title element with play button
        let titleContainer = document.createElement("div");
        titleContainer.classList.add("title-container");

        let title = document.createElement("h2");
        title.textContent = movie.title;

        // Create YouTube play button element (SVG)
        let playButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        playButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        playButton.classList.add("play-button");
        playButton.innerHTML = `
            <path fill="#FF0000" d="M 24 12 L 24 36 L 42 24 L 24 12 Z" />
        `;
        playButton.addEventListener("click", () => playTrailer(movie.trailer));

        title.appendChild(playButton);
        title.addEventListener("click", () => playTrailer(movie.trailer));
        titleContainer.appendChild(title);
        cardContent.appendChild(titleContainer);

        // Create image element
        let img = document.createElement("img");
        img.src = movie.poster;
        img.alt = `${movie.title} Poster`;
        card.appendChild(img);

        // Create genre element
        let genre = document.createElement("p");
        genre.textContent = `Genre: ${movie.genre}`;
        cardContent.appendChild(genre);

        // Create description element
        let description = document.createElement("p");
        description.textContent = movie.description;
        cardContent.appendChild(description);

        // Append card content to card
        card.appendChild(cardContent);

        // Append card to movie list
        movieList.appendChild(card);
    });
}

// Function to play trailer
function playTrailer(trailerUrl) {
    const modal = document.getElementById("trailerModal");
    const video = document.getElementById("trailerVideo");

    video.src = trailerUrl;
    modal.style.display = "flex";
}

// Close modal function
document.querySelector("#trailerModal .close").addEventListener("click", () => {
    const modal = document.getElementById("trailerModal");
    const video = document.getElementById("trailerVideo");

    video.src = "";
    modal.style.display = "none";
});

// Call displayMovies function when page loads
document.addEventListener("DOMContentLoaded", displayMovies);
