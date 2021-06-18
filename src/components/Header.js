import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [caption, setCaption] = useState({
    link: '',
    linkName: '',
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
    }
  }, [location])
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Место" />
      <Link className="auth__caption-link auth__caption-link_header" to={caption.link}>
        {caption.linkName}
      </Link>
    </header>
  )
}

export default Header
