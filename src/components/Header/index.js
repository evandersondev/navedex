import React from 'react'

import LogoImage from '../../assets/logo.svg'

import { Container } from './styles'

function Header() {
  return (
    <Container>
      <img src={LogoImage} alt="Nave.rs" />
      <button>Sair</button>
    </Container>
  )
}

export default Header
