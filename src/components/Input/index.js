import React from 'react'

import { Container } from './styles'

export default ({ label, name, type = 'text' }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} placeholder={label} />
    </Container>
  )
}
