export class Api {
  constructor(config) {
    this._url = config.url
    this._headers = config.headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  //Загрузка информации о пользователе с сервера
  getUser() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse)
  }
  //Загрузка карточек с сервера
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse)
  }
  //Редактирование профиля
  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._checkResponse)
  }
  //Добавление новой карточки
  createNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResponse)
  }
  //Удаление карточки
  removeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse)
  }

  //Постановка и снятие лайка
  //Поставить лайк
  likeCard(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkResponse)
  }
  //Снять лайк
  deleteLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse)
  }
  //Обновление аватара пользователя
  updateAvatar(newAvatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        //avatar: newAvatar['avatar-link'],
        avatar: newAvatar,
      }),
    }).then(this._checkResponse)
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-23',
  headers: {
    Authorization: 'c612ee53-bfd9-4a06-b181-f06567a06aa2',
    'Content-Type': 'application/json',
  },
})

export default api
