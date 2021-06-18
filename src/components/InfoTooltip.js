//компонент модального окна,который информирует пользователя об успешной (или не очень) регистрации
import React from 'react'
import PopupWithForm from './PopupWithForm'
import done from '../blocks/popup/__infoTool-img/images/done.svg'
import errorElement from '../blocks/popup/__infoTool-img/images/registration-error.svg'

function InfoTooltip(props) {
  return (
    <PopupWithForm>
      <>
        <img className="popup__infoTool-img" src={true ? done : errorElement}></img>
        <p className="popup__infoTool-message">
          {true
            ? `Вы успешно${(<br />)}зарегистрировались!`
            : `Что-то пошло не так!${(<br />)}
Попробуйте ещё раз.`}
        </p>
      </>
    </PopupWithForm>
  )
}
export default InfoTooltip
