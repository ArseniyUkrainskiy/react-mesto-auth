## Проект Место на React 

Портирование проекта на React. :atom_symbol:

* БЭМ, ООП
* HTML, CSS, JS, webpack, API, JSX, React
* Новый проект на Create React App в новом репозитории
* Разметка портирована в JSX
* Директория components: App.js, Card.js, ImagePopup.js, PopupWithForm.js, Main.js, Header.js, Footer.js, AddPlacePopup.js, EditAvatarPopup.js, EditProfilePopup.js
* Директория contexts с файлом CurrentUserContext.js
* Императивные обработчики, декларативный подход,
модуль API использован стейт для данных из API, полноразмерная картинка при клике
* Хуки вызываются в основной функции компонента
* На странице отрисовывается информация о пользователе и карточки
* Модальные окна открываются при нажатии на соответствующий элемент интерфейса
* Компоненты Main и Card подписаны на контекст CurrentUserContext
* Выполнено поднятие стейта из компонент Main и Card
* В компонент App внедрён контекст через CurrentUserContext.Provider
* В корневом компоненте App создана стейт-переменная currentUser. Она используется в качестве значения для провайдера контекста
* Запросы к API описаны внутри компонента App

#### Команды для запуска

:small_blue_diamond: npm run start
