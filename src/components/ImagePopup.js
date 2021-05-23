import React from 'react'

function ImagePopup({ card, onClose }) {
  // console.log(card)
  return (
    <div className={`popup popup_type_image ${card && 'popup_opened'}`}>
      <div className="popup__image-container">
        <button type="button" className="popup__close" id="close-image" onClick={onClose}></button>
        <img src={card ? card.link : ''} alt={card ? card.name : ''} className="popup__image" />
        <p className="popup__title-img">{card ? card.name : ''}</p>
      </div>
    </div>
  )
}

export default ImagePopup
