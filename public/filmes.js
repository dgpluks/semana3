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

    link.href = `filme.html?id=${movie.id}`;
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


