 class Api {
    constructor(config) {
        this._url = config.url;
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
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${localStorage.getItem('token')}`
              },
            credentials: "include"
        })
            .then(this._checkResponse)
    }

    getAllCards() {
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${localStorage.getItem('token')}`
              },
            credentials: "include"
        })
            .then(this._checkResponse)
    }
    addCard(data) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${localStorage.getItem('token')}`
              },
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
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${localStorage.getItem('token')}`
              },
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
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${localStorage.getItem('token')}`
              },
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
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${localStorage.getItem('token')}`
              },
            credentials: "include"
        })
            .then(this._checkResponse)
    }
    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${localStorage.getItem('token')}`
              },
            credentials: "include"
        })
            .then(this._checkResponse)
    }
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${localStorage.getItem('token')}`
              },
            credentials: "include"
        },)
            .then(this._checkResponse)
    }
}


const api = new Api({
    url: 'https://api.mesto-practicum.nomoredomains.sbs'
  })

export default api;

