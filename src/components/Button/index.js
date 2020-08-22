import React from 'react'

import { Container } from './styles'

export default ({
  type,
  name,
  onClick,
  className,
  width = '176px',
  color = 'dark',
}) => {
  return (
    <Container className={className} width={width} color={color}>
      <button onClick={onClick} type={type}>
        {name}
      </button>
    </Container>
  )
}
