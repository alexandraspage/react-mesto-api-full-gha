 class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject('Произошла ошибка');
    }

    getInfo() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers,
            credentials: "include"
        })
            .then(this._checkResponse)
    }

    getAllCards() {
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers,
            credentials: "include"
        })
            .then(this._checkResponse)
    }
    addCard(data) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            }),
            credentials: "include"
        })
            .then(this._checkResponse)
    }
    changeUserInfo(data) {

        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.description
            }),
            credentials: "include"
        })
            .then(this._checkResponse)

    }
    changeAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            }),
            credentials: "include"
        })
            .then(this._checkResponse)
    }
    putLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers,
            credentials: "include"
        })
            .then(this._checkResponse)
    }
    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers,
            credentials: "include"
        })
            .then(this._checkResponse)
    }
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
            credentials: "include"
        },)
            .then(this._checkResponse)
    }
}


const api = new Api({
    url: 'http://localhost:3000',
    headers: {
      'content-type': 'application/json',
       authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

export default api;

//https://api.mesto-practicum.nomoredomains.sbs