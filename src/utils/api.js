class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getImage() {
    return fetch(`${this._baseUrl}`, {}).then(this._checkResponse);
  }
}

const apiCat = new Api({
  baseUrl: 'https://api.thecatapi.com/v1/images/search',
});
const apiDog = new Api({
  baseUrl: 'https://dog.ceo/api/breeds/image/random',
});
const apiFox = new Api({
  baseUrl: 'https://randomfox.ca/floof/',
});

export { apiCat, apiDog, apiFox };
