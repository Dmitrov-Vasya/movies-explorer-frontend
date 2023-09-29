class MainApi {

    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
        this.body = config.body;
        this.credentials = config.credentials;
    }

    checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
    }

    // Передачи данных пользователя
    editProfile({name, email}) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            credentials: this.credentials,
            body: JSON.stringify({
                name: name,
                email: email
            })
        }).then(this.checkResponse);
    }

    // Запрос о сохраненных фильмах
    getSavedMovies() {
        return fetch(`${this.url}/movies`, {
            headers: this.headers,
            credentials: this.credentials,
        }).then(this.checkResponse);
    }

    // Отправка данных об установке/снятии лайка на сервер
    addSavedMovie(movie) {
        return fetch(`${this.url}/movies`, {
            method: 'POST',
            headers: this.headers,
            credentials: this.credentials,
            body: JSON.stringify(movie)
        }).then(this.checkResponse);
    }

    // Удаления карточки с сервера
    deleteSavedMovie(cardId) {
        return fetch(`${this.url}/movies/${cardId}`, {
            method: 'DELETE',
            headers: this.headers,
            credentials: this.credentials,
        }).then(this.checkResponse);
    }
}

const api = new MainApi({
        url: 'http://api.movies.dmitrov.ru.nomoredomainsrocks.ru',
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'include',
});
export default api;
