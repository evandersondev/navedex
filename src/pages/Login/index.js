import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from 'services/api'

import LogoImage from 'assets/logo.svg'
import { Alert, Button, Input } from 'components'
import { Container, Form } from './styles'

export default () => {
  const token = localStorage.getItem('token')
  const { push } = useHistory()
  const [alert, setAlert] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const isLogged = () => {
      token && push('/home')
    }
    isLogged()
  }, [token, push])

  const handleLogin = async e => {
    e.preventDefault()

    try {
      const { token } = await api.loginSession({ email, password })
      localStorage.setItem('token', token)
      push('/home')
    } catch (err) {
      setAlert({
        title: 'Erro no login',
        message: 'Verifique todos os campos e tente novamente.',
        enable: true,
      })
    }
  }

  return (
    <Container>
      <Alert {...alert} setAlert={setAlert} />

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
