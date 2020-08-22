import React from 'react'

import { Container } from './styles'

export default ({
  label,
  name,
  placeholder,
  type = 'text',
  width,
  className,
  pattern,
  required,
  ...rest
}) => {
  return (
    <Container width={width} className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        type={type}
        id={name}
        placeholder={placeholder || label}
      />
    </Container>
  )
}
