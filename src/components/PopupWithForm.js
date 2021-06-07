//общий компонент попапов
import React from 'react'

function PopupWithForm({ title, name, children, isOpen, onClose, onSubmit }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form popup__form_edit" name={name} noValidate onSubmit={onSubmit}>
          <fieldset className="popup__fieldset">{children}</fieldset>
          <button type="submit" className="popup__submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm
