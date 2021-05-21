import Header from './Header'
import Main from './Main'
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <body class="root">
        <Header />
        <Main />
        <Footer />

        <div class="popup" id="user">
          <div class="popup__container">
            <button type="button" class="popup__close" id="close-profile"></button>

            <h2 class="popup__title">Редактировать профиль</h2>

            <form class="popup__form popup__form_edit" name="popup-form" novalidate>
              <fieldset class="popup__fieldset">
                <input
                  type="text"
                  name="name"
                  required
                  class="popup__field popup__field_input_name"
                  placeholder="Имя"
                  minlength="2"
                  maxlength="40"
                  id="edit"
                />
                <span class="popup__error" id="edit-error"></span>
                <input
                  type="text"
                  name="about"
                  required
                  class="popup__field popup__field_input_characteristic"
                  placeholder="О себе"
                  minlength="2"
                  maxlength="200"
                  id="about"
                />
                <span class="popup__error" id="about-error"></span>
              </fieldset>
              <button type="submit" class="popup__submit">
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div class="popup" id="cards">
          <div class="popup__container">
            <button type="button" class="popup__close" id="close-cards"></button>

            <h2 class="popup__title">Новое место</h2>

            <form class="popup__form popup__form_cards" name="popup-form" novalidate>
              <fieldset class="popup__fieldset">
                <input
                  type="text"
                  name="name"
                  required
                  class="popup__field popup__field_input_place"
                  placeholder="Название"
                  minlength="2"
                  maxlength="30"
                  autocomplete="off"
                  id="card-name"
                />
                <span class="popup__error" id="card-name-error"></span>
                <input
                  type="url"
                  name="link"
                  required
                  class="popup__field popup__field_input_url"
                  placeholder="Ссылка на картинку"
                  id="link"
                />
                <span class="popup__error" id="link-error"></span>
              </fieldset>
              <button type="submit" class="popup__submit">
                Создать
              </button>
            </form>
          </div>
        </div>

        <div class="popup" id="edit-profile">
          <div class="popup__container">
            <button type="button" class="popup__close" id="close-edit-profile"></button>
            <h2 class="popup__title">Обновить аватар</h2>
            <form class="popup__form popup__form_avatar" name="popup-form" novalidate>
              <fieldset class="popup__fieldset">
                <input
                  type="url"
                  name="avatar-link"
                  required
                  class="popup__field popup__field_input_url"
                  placeholder="Ссылка на аватар"
                  id="avatar-link"
                />
                <span class="popup__error" id="avatar-link-error"></span>
              </fieldset>
              <button type="submit" class="popup__submit">
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div class="popup" id="image">
          <div class="popup__image-container">
            <button type="button" class="popup__close" id="close-image"></button>
            <img src=" #" alt=" img" class="popup__image" />
            <p class="popup__title-img"></p>
          </div>
        </div>

        <div class="popup" id="card-delete">
          <form class="popup__container" id="popup-submit">
            <button type="button" class="popup__close" id="close-card-delete"></button>
            <h2 class="popup__title popup__title-delete">Вы уверены?</h2>
            <button type="submit" class="popup__submit">
              Да
            </button>
          </form>
        </div>

        <template class="template">
          <li class="element">
            <button type="button" class="element__delete"></button>
            <img src=" #" alt=" img" class="element__image" />
            <div class="element__group">
              <h2 class="element__title"></h2>
              <div>
                <button type="button" class="element__like"></button>
                <span class="element__like-count"></span>
              </div>
            </div>
          </li>
        </template>
      </body>
    </div>
  )
}

export default App
