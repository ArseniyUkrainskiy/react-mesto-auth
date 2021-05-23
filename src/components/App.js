import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import React from 'react'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isRemovePlacePopupOpen, setRemovePlacePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  const handleCardClick = ({ name, link }) => setSelectedCard({ name, link })

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function handleRemovePlaceClick() {
    setRemovePlacePopupOpen(true)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setRemovePlacePopupOpen(false)
    setSelectedCard(null)
  }

  return (
    <div className="App root">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onRemovePlace={handleRemovePlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        onClose={closeAllPopups}
        title="Вы уверены ?"
        name="remove-card"
        isOpen={isRemovePlacePopupOpen}
      />
      <PopupWithForm
        onClose={closeAllPopups}
        title="Редактировать профиль"
        name="edit-profile"
        children={
          <>
            <input
              type="text"
              name="name"
              required
              className="popup__field popup__field_input_name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              id="edit"
            />
            <span className="popup__error" id="edit-error"></span>
            <input
              type="text"
              name="about"
              required
              className="popup__field popup__field_input_characteristic"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              id="about"
            />
            <span className="popup__error" id="about-error"></span>
          </>
        }
        isOpen={isEditProfilePopupOpen}
      />
      <PopupWithForm
        onClose={closeAllPopups}
        title="Новое место"
        name="cards"
        children={
          <>
            <input
              type="text"
              name="name"
              required
              className="popup__field popup__field_input_place"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              autoComplete="off"
              id="card-name"
            />
            <span className="popup__error" id="card-name-error"></span>
            <input
              type="url"
              name="link"
              required
              className="popup__field popup__field_input_url"
              placeholder="Ссылка на картинку"
              id="link"
            />
            <span className="popup__error" id="link-error"></span>
          </>
        }
        isOpen={isAddPlacePopupOpen}
      />
      <PopupWithForm
        onClose={closeAllPopups}
        title="Обновить аватар"
        name="edit-avatar"
        children={
          <>
            <input
              type="url"
              name="avatar-link"
              required
              className="popup__field popup__field_input_url"
              placeholder="Ссылка на аватар"
              id="avatar-link"
            />
            <span className="popup__error" id="avatar-link-error"></span>
          </>
        }
        isOpen={isEditAvatarPopupOpen}
      />
    </div>
  )
}

export default App
