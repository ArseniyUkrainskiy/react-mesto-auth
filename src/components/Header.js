import React from 'react'
import logo from '../images/logo.svg'

function Header() {
  return (
    <header class="header">
      <img class="header__logo" src={logo} alt="Место" />
    </header>
  )
}

export default Header
