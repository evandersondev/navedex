import React from 'react'

import { Container } from './styles'

export default ({ type, name, width = '176px' }) => {
  return (
    <Container width={width}>
      <button type={type}>{name}</button>
    </Container>
  )
}
