import React from 'react'
import api from '../utils/api'
import Card from './Card'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('Имя..')
  const [userDescription, setUserDescription] = React.useState('О себе..')
  const [userAvatar, setUserAvatar] = React.useState(`https://rb.ru/media/upload_tmp/2018/d5.gif`)
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([api.getUser(), api.getInitialCards()])
      .then((data) => {
        const [userData, cardsData] = data
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)
        setCards(cardsData)
      })
      .catch((err) => {
        console.log(`Ошибка при получении данных: ${err}`)
      })
  }, [])

  return (
    <main className="page">
      <section className="profile">
        <button
          type="button"
          className="profile__avatar-edit"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}></button>
        <div className="profile__info">
          <div className="profile__info-edit">
            <h1 className="profile__info-name">{userName}</h1>
            <button className="profile__button-edit" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__characteristic">{userDescription}</p>
        </div>
        <button className="profile__button-add" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__places">
          {cards.map((card) => {
            return (
              <Card
                name={card.name}
                key={card._id}
                link={card.link}
                likes={card.likes.length}
                onCardClick={onCardClick}
              />
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default Main
