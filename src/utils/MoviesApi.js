class MoviesApi {

    constructor({host}) {
        this.host = host
    }

    checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
    }

    getMovies() {
        return fetch(this.host + "/beatfilm-movies").then(this.checkResponse)
    }
}

const moviesApi = new MoviesApi({
    host: "https://api.nomoreparties.co"
});

export default moviesApi;