import React from 'react'
import PopupWithForm from './PopupWithForm'
//В этот раз вы можете использовать как управляемые компоненты, так и рефы для получения значений инпутов — на ваше усмотрение.
function AddPlacePopup(props) {
  const cardNameRef = React.useRef()
  const cardUrlRef = React.useRef()

  function handleSubmit(e) {
    e.preventDefault()
    props.onAddPlace({ name: cardNameRef.current.value, link: cardUrlRef.current.value })
    e.target.reset()
  }
  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      title="Новое место"
      name="cards">
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
        ref={cardNameRef}
      />
      <span className="popup__error" id="card-name-error"></span>
      <input
        type="url"
        name="link"
        required
        className="popup__field popup__field_input_url"
        placeholder="Ссылка на картинку"
        id="link"
        ref={cardUrlRef}
      />
      <span className="popup__error" id="link-error"></span>
    </PopupWithForm>
  )
}
export default AddPlacePopup
