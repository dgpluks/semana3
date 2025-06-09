const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjA3ZDQyNWNiYjVkYTYwZDY3MGNlNzUyNjg4NDhjYiIsIm5iZiI6MTc0OTI0Mzc1OS4zNDgsInN1YiI6IjY4NDM1NzZmN2M2YzZlNTQ1Njk2Yzk1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PI2hZf0yN2NKP0e1cidJeh9Etf7PoJwAzNQ5TaSy2kg';
const options = {method: 'GET', headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
}};

const main = document.querySelector('main.index');

function renderMovie(movie) {
    const card = document.createElement('div');
    const banner = document.createElement('img');
    const title = document.createElement('h3');
    const link = document.createElement('a');

    card.classList.add('card');
    link.classList.add('link');
    banner.classList.add("banner");
    title.classList.add('title');
    

    card.append(link);
    link.append(banner, title);

    link.href = "filme.html";
    link.id="filme";
    
    banner.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    title.innerText = movie.title;
    
    
    
        
    

    main.appendChild(card);
}

async function load() {
    const movies = await (await fetch(`${BASE_URL}/discover/movie`, options)).json();
    for (let i = 0; i < movies.results.length; i++) {
        renderMovie(movies.results[i]);
    }
}

load();


