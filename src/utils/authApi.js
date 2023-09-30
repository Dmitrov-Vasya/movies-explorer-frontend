class AuthApi {

    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
        this.body = config.body;
        this._credentials = config.credentials;
    }

    checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
    }

    register = ({email, password, name}) => {
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            headers: this.headers,
            credentials: this._credentials,
            body: JSON.stringify({email, password, name}),
        }).then(this.checkResponse);
    };

    authorize = ({email, password}) => {
        return fetch(`${this.url}/signin`, {
            method: 'POST',
            headers: this.headers,
            credentials: this._credentials,
            body: JSON.stringify({email, password}),
        }).then(this.checkResponse);
    };

    logout = () => {
        return fetch(`${this.url}/signout`, {
            method: 'GET',
            headers: this.headers,
            credentials: this._credentials,
        }).then(this.checkResponse);
    };

    checkToken = () => {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            headers: this.headers,
            credentials: this._credentials,
        }).then(this.checkResponse);
    };

}

const auth = new AuthApi({
        url: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'include',
});

export default auth;

