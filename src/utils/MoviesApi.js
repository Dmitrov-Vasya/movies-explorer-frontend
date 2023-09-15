class ApiMovies {
    constructor({ url, headers }) {
        this.url = url.moviesApi;
        this._headers = headers;
    }

    // Проверка успешности запроса
    _isOk(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то где-то пошло не так... Код ошибки ${res.status}`);
    }

    // Запрос с проверкой ответа
    _request(url, options) {
        return fetch(url, options).then(this._isOk)
    }

    // Запрос данных пользователя
    getMovies() {
        return this._request(this.url, {
            headers: this._headers,
        })
    }
}

export const apiMovies = new ApiMovies(apiConfig);
