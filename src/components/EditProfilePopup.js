import React from 'react'
import PopupWithForm from './PopupWithForm'
import CurrentUserContext from '../contexts/CurrentUserContext'

function EditProfilePopup(props) {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const currentUser = React.useContext(CurrentUserContext)

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser])

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onUpdateUser({
      name,
      about: description,
    })
    e.target.reset()
  }

  function handleClear() {
    setName(currentUser.name)
    setDescription(currentUser.about)
    props.onClose()
  }

  return (
    <PopupWithForm
      onClose={handleClear}
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={props.isOpen}
      onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        required
        className="popup__field popup__field_input_name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        id="edit"
        onChange={handleChangeName}
        value={name}
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
        onChange={handleChangeDescription}
        value={description}
      />
      <span className="popup__error" id="about-error"></span>
    </PopupWithForm>
  )
}
export default EditProfilePopup
