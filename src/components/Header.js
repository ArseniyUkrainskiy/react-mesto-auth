import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import { Link, useLocation } from 'react-router-dom'

function Header({ userEmail, onSignOut }) {
  const [caption, setCaption] = useState({
    link: '',
    linkName: '',
    email: '',
  })
  const location = useLocation()
  useEffect(() => {
    switch (location.pathname) {
      case '/sign-up':
        setCaption({ link: '/sign-in', linkName: 'Войти' })
        break
      case '/sign-in':
        setCaption({ link: '/sign-up', linkName: 'Регистрация' })
        break
      case '/':
        setCaption({ link: '/sign-up', linkName: 'Выйти', email: userEmail.email })
        break
      default:
        console.log('ошибка в маршрутизации')
        setCaption({ link: '/sign-in', linkName: 'Войти' })
        break
    }
  }, [location, userEmail])
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Место" />
      {userEmail && (
        <span
          style={{
            color: '#fff',
            fontSize: '18',
            lineHeight: '22px',
            marginRight: '24px',
          }}>
          {caption.email}
        </span>
      )}
      {caption.email ? (
        <button onClick={onSignOut} className="auth__caption-button">
          {caption.linkName}
        </button>
      ) : (
        <Link className="auth__caption-link auth__caption-link_header" to={caption.link}>
          {caption.linkName}
        </Link>
      )}
    </header>
  )
}

export default Header
