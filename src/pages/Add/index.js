import React, { useState } from 'react'
import api from '../../services/api'

import Header from '../../components/Header'
import Alert from '../../components/Alert'
import Form from '../../components/Form'

import { Container } from './styles'

export default () => {
  const [alert, setAlert] = useState({})

  const handleSubmitForm = async (e, { data }) => {
    e.preventDefault()
    try {
      await api.createNaver(data)

      setAlert({
        title: 'Naver criado',
        message: 'Naver criado com sucesso!',
        enable: true,
      })
    } catch (err) {
      setAlert({
        title: 'Erro ao cadastrar o naver!',
        message: 'Verifique todos os campos e tente novamente.',
        enable: true,
      })
    }
  }

  return (
    <Container>
      <Alert {...alert} setAlert={setAlert} />

      <Header />
      <Form titlePage="Adicionar Naver" onSubmit={handleSubmitForm} />
    </Container>
  )
}
