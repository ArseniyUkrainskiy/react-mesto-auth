import React from 'react'

function Card({ name, link, likes, onCardClick }) {
  function handleClick() {
    onCardClick({ name, link })
  }
  return (
    <li className="element">
      <button type="button" className="element__delete"></button>
      <img src={link} alt={name} className="element__image" onClick={handleClick} />
      <div className="element__group">
        <h2 className="element__title">{name}</h2>
        <div>
          <button type="button" className="element__like"></button>
          <span className="element__like-count">{likes ? likes : ''}</span>
        </div>
      </div>
    </li>
  )
}

export default Card
