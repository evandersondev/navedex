import React from 'react'
import { useHistory } from 'react-router-dom'

import LogoImage from 'assets/logo.svg'

import { Container } from './styles'

function Header() {
  const { push } = useHistory()

  const logoutSession = () => {
    localStorage.removeItem('token')
    push('/')
  }

  return (
    <Container>
      <img src={LogoImage} alt="Nave.rs" />
      <button type="button" onClick={logoutSession}>
        Sair
      </button>
    </Container>
  )
}

export default Header
