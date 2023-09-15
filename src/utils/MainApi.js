class Api {
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
        this.body = config.body;
        this._credentials = config.credentials;
    }


    // Создания пользователя
    addUser({ name, password, email }) {
        return this._request(`${this.url}/signup`, {
            method: 'POST',
            headers: this._headers,
            credentials: this._credentials,
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            })
        }).then(this._checkResponse);
    }


    // Запрос о сохраненных фильмах
    getMovies() {
        return this._request(`${this.url}/movies`, {
            headers: this._headers,
            credentials: this._credentials,
        }).then(this._checkResponse);
    }

    // Передачи данных пользователя
    setUserInfo({ name, email }) {
        return this._request(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            credentials: this._credentials,
            body: JSON.stringify({
                name: name,
                email: email
            })
        }).then(this._checkResponse);
    }

    // Отправка данных об установке/снятии лайка на сервер
    saveMovie(movie) {
        return this._request(`${this.url}/movies`, {
            method: 'POST',
            headers: this._headers,
            credentials: this._credentials,
            body: JSON.stringify(movie)
        })
    }

    // Удаления карточки с сервера
    deleteMovie(cardId) {
        return this._request(`${this.url}/movies/:cardId`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: this._credentials,
        })
    }
}

const api = new Api({
    url: 'https://api.movies.dmitrov.ru.nomoreparties.co/',
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'include',
});
export default api;
