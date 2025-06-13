const JSON_SERVER_URL = "http://localhost:3000"

export async function favoritar(id) {
    if (await estaFavoritado(id)) throw new Error("Filme ja esta favoritado");

    await fetch(`${JSON_SERVER_URL}/favoritos`, {
        method: 'POST',
        body: JSON.stringify({ id })
    });
}

export async function obterFavoritos() {
    return await (await fetch(`${JSON_SERVER_URL}/favoritos`)).json();
}

export async function removerFavorito(id) {
    return await fetch(`${JSON_SERVER_URL}/favoritos${id}`, {
        method: 'DELETE',
    });
}

export async function estaFavoritado(id) {
    const resposta = (await (await fetch(`${JSON_SERVER_URL}/favoritos?id=${id}`)).json());
    return resposta.length > 0;
}

export async function alternarFavorito(id) {
    if (await estaFavoritado(id)) {
        await removerFavorito(id);
        return false;
    } else {
        await favoritar(id);
        return true;
    }
}