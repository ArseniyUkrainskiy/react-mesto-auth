import React from 'react'
import AuthForm from './AuthForm'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <AuthForm title="Регистрация" btnText="Зарегистрироваться">
      <span className="auth__caption">
        Уже зарегистрированы?<>&nbsp;</>
        <Link className="auth__caption-link" to="/sign-in">
          Войти
        </Link>
      </span>
    </AuthForm>
  )
}

export default Register
