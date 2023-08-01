export const BASE_URL = 'https://api.mesto-practicum.nomoredomains.sbs';


function checkResponse(res) {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export function register(email, password) {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
    })
        .then((res) => checkResponse(res));
};

export function authorize(email, password) {
    return fetch(`${BASE_URL}/signin`, {
        method: `POST`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
    })
        .then((res) => checkResponse(res));
}

export function getContent(jwt) {
    return fetch(`${BASE_URL}/users/me`, {
        method: `GET`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`
        },
        credentials: 'include',
    })
        .then((res) => checkResponse(res));
}