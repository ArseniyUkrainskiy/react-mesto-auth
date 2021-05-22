import React from 'react'

function ImagePopup() {
  return (
    <div className="popup" id="image">
      <div className="popup__image-container">
        <button type="button" className="popup__close" id="close-image"></button>
        <img src=" #" alt=" img" className="popup__image" />
        <p className="popup__title-img"></p>
      </div>
    </div>
  )
}

export default ImagePopup
