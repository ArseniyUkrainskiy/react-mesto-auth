import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import React from 'react'
import ImagePopup from './ImagePopup'
import api from '../utils/api'
import CurrentUserContext from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import ConfirmationPopup from './ConfirmationPopup'

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: 'Имя...', about: 'О себе..' })
  const [cards, setCards] = React.useState([]) //Выполнено поднятие стейта
  React.useEffect(() => {
    //тут я получаю данные сразу по пользователю и карточке, так как нет смысла разделять их. Стейт-переменыне вынесены.
    Promise.all([api.getUser(), api.getInitialCards()])
      .then((data) => {
        const [userData, cardsData] = data
        setCurrentUser(userData)
        setCards(cardsData)
      })
      .catch((err) => {
        console.log(`Ошибка при получении данных: ${err}`)
      })
  }, [])

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isRemovePlacePopupOpen, setRemovePlacePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [remCardId, setRemCardId] = React.useState('')

  const handleCardClick = ({ name, link }) => setSelectedCard({ name, link })

  function handleCardLike({ likes, cardId }) {
    const isLiked = likes.some((like) => like._id === currentUser._id)
    isLiked
      ? api
          .deleteLike(cardId)
          .then((newCard) => {
            setCards((state) => state.map((card) => (card._id === cardId ? newCard : card)))
          })
          .catch((err) => {
            console.log(`Ошибка при получении данных карточки во время лайка: ${err}`)
          })
      : api
          .likeCard(cardId)
          .then((newCard) => {
            setCards((state) => state.map((card) => (card._id === cardId ? newCard : card)))
          })
          .catch((err) => {
            console.log(`Ошибка при получении данных карточки во время лайка: ${err}`)
          })
  }

  function handleCardDelete() {
    api
      .removeCard(remCardId)
      .then(() => {
        //исключить удаленную карточку из массива
        setCards(cards.filter((card) => card._id !== remCardId))
        closeAllPopups()
      })
      .catch((err) => {
        console.log(`Ошибка при удалении карточки: ${err}`)
      })
  }

  function handleUpdateUser({ name, about }) {
    api
      .editUserInfo({ name, about })
      .then((userData) => {
        setCurrentUser(userData) //После завершения запроса обновите стейт currentUser из полученных данных
        closeAllPopups() //закройте все модальные окна
      })
      .catch((err) => {
        console.log(`Ошибка при редактировании профиля: ${err}`)
      })
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .updateAvatar(avatar)
      .then((userData) => {
        setCurrentUser(userData)
        closeAllPopups()
      })
      .catch((err) => {
        console.log(`Ошибка при редактировании аватара: ${err}`)
      })
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .createNewCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch((err) => {
        console.log(`Ошибка при добавлении новой карточки: ${err}`)
      })
  }
  //Красота!
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function handleRemovePlaceClick({ cardId }) {
    setRemCardId(cardId)
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
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="root">
          <Header />
          <Main
            cards={cards}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onRemovePlace={handleRemovePlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike} //Выполнено поднятие стейта
            //onCardDelete={handleCardDelete} //Выполнено поднятие стейта
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <ConfirmationPopup
            onClose={closeAllPopups}
            isOpen={isRemovePlacePopupOpen}
            onCardDelete={handleCardDelete}
          />
        </div>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App
