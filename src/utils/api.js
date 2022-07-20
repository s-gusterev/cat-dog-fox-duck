class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  // Проверяем ответ от сервера
  _checkResponse(res) {
    if (res.ok) {
      // Если все ок - получаем первоначальный ответ от сервера
      console.log(res);
      // return res; // Читаем ответ в формате json
      return res.json(); // Читаем ответ в формате json
    }
    return Promise.reject(`Ошибка: ${res.status}`); // Если не ок возвращаем отклоненный промис с описанием ошибки
  }

  getImage() {
    return fetch(`${this._baseUrl}`, {}).then(this._checkResponse);
  }
}

const apiCat = new Api({
  baseUrl: 'https://aws.random.cat/meow',
});
const apiDog = new Api({
  baseUrl: 'https://dog.ceo/api/breeds/image/random',
});
const apiFox = new Api({
  baseUrl: 'https://randomfox.ca/floof/',
});

export { apiCat, apiDog, apiFox };
