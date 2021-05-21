import React from 'react'

function Main() {
  return (
    <main class="page">
      <section class="profile">
        <button type="button" class="profile__avatar-edit"></button>
        <div class="profile__info">
          <div class="profile__info-edit">
            <h1 class="profile__info-name">имя.загрузка...</h1>
            <button class="profile__button-edit" type="button"></button>
          </div>
          <p class="profile__characteristic">о себе.загрузка...</p>
        </div>
        <button class="profile__button-add" type="button"></button>
      </section>

      <section class="elements">
        <ul class="elements__places"></ul>
      </section>
    </main>
  )
}

export default Main
