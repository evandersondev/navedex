import React from 'react'

import LogoImage from '../../assets/logo.svg'
import Input from '../../components/Input'

import { Container, Form } from './styles'
import Button from '../../components/Button'

export default () => {
  return (
    <Container>
      <Form>
        <img src={LogoImage} alt="Nave.rs" />
        <Input type="email" label="E-mail" name="email" />
        <Input type="password" label="Senha" name="senha" />
        <Button type="submit" name="Entrar" width="100%" />
      </Form>
    </Container>
  )
}
