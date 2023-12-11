const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector(".movies-box");
const searchBox = document.querySelector("#searchBox");

async function getMovies(APIURL) {
  let raw = await fetch(APIURL);
  let response = await raw.json();
  showMovies(response);
}

getMovies(APIURL);

const showMovies = function (response) {
  // Removes popular movies and give us desired result
  movieBox.innerHTML = "";

  // Iterates over arrray
  response.results.forEach((items) => {
    const movies = document.createElement("div");
    movies.classList.add("movies");
    movies.innerHTML = `<div class="movies">
        <img src="${IMGPATH + items.poster_path}" alt="">
        <div class="overlay">
            <div class="overlay-title">
                <h1>${items.title}</h1>
                <span>${items.vote_average}</span>
            </div>
            <div class="overview">
                <h1>Overview</h1>
                <p>${items.overview}</p>
            </div>
        </div>
    </div>`;

    movieBox.appendChild(movies);
  });
};

//Search Box
searchBox.addEventListener("keyup", function (dets) {
  if (dets.target.value != "") {
    getMovies(SEARCHAPI + dets.target.value);
  } else {
    getMovies(APIURL);
  }
});
