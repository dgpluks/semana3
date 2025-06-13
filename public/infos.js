import { favoritar, removerFavorito, obterFavoritos, estaFavoritado, alternarFavorito } from "./favoritos.js";

const main = document.querySelector('main');

async function load() {
    const id = new URLSearchParams(window.location.search).get("id");

    if (id === null || id.length === 0 || isNaN(parseInt(id))) {
        window.location.href = `./index.html`;
    }

    const movie = await (await fetch(`${BASE_URL}/movie/${id}`, options)).json();
    const videos = await (await fetch(`${BASE_URL}/movie/${id}/videos`, options)).json();
    videos.results = videos.results.filter(video => video.official && video.site === "YouTube");
    const trailer = videos.results.find((video) => video.name.toLowerCase().includes("official trailer")) ?? videos.results[0];
    
    console.log(movie);
    console.log(videos);
    const aval = document.createElement('div');
    const fgc = document.createElement('div');
    const imagem = document.createElement('img');
    const favorit = document.createElement('img');
    const title = document.createElement('h1');
    const sobre = document.createElement('p');
    const lancamento = document.createElement('p');
    const nota = document.createElement('p');
    const estrela = document.createElement('img');
    const video = main.querySelector('iframe');
    const favoritar = document.createElement('button');

    favorit.classList.add('favorit');
    favoritar.classList.add('favoritar');
    fgc.classList.add('fgc');
    video.classList.add('trailer')
    aval.classList.add('aval');
    estrela.classList.add('star');
    imagem.classList.add('imagem');
    title.classList.add("titulo");
    sobre.classList.add('resumo');
    lancamento.classList.add('data');
    nota.classList.add('avaliacao');



    fgc.append(lancamento, aval);
    aval.append(nota, estrela);
    favoritar.append(favorit);


    favorit.src = `imagens/${await estaFavoritado(id) ? "favorit-clicked.png" : "favorit-unclicked.png"}`;
    imagem.src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    sobre.innerText = movie.overview;
    lancamento.textContent = "Data de lançamento: " + movie.release_date;
    estrela.src = `imagens/star.png`;
    nota.innerText = movie.vote_average.toFixed(1) + "/10";
    title.innerText = movie.title;
    if (trailer?.key) video.src = `https://www.youtube.com/embed/${trailer.key}`;

    favoritar.onclick = (e) => {
        e.preventDefault();
        favorite(favorit, id);
        return false;
    }

    main.append(imagem, title, sobre, video, favoritar, fgc);
    if (!trailer?.key) main.removeChild(video);
}
async function favorite(img, id) {
    try {
        const favoritado = await alternarFavorito(id);
        img.src = favoritado
            ? "imagens/favorit-clicked.png"
            : "imagens/favorit-unclicked.png";
    } catch(err) {
        console.error(err);
    }
}
console.log(await obterFavoritos());

load();

