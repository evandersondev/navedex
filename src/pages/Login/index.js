import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import LogoImage from '../../assets/logo.svg'
import Input from '../../components/Input'

import { Container, Form } from './styles'
import Button from '../../components/Button'
import api from '../../services/api'

export default () => {
  const token = localStorage.getItem('token')
  const { push } = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    isLogged()
  }, [])

  const isLogged = () => {
    token && push('/home')
  }

  const handleLogin = async e => {
    e.preventDefault()

    try {
      const { token } = await api.loginSession({ email, password })
      localStorage.setItem('token', token)
      push('/home')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <img src={LogoImage} alt="Nave.rs" />
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          label="E-mail"
          name="email"
        />
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          label="Senha"
          name="senha"
        />
        <Button type="submit" name="Entrar" width="100%" />
      </Form>
    </Container>
  )
}
