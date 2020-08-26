import React, { useState } from 'react'
import api from 'services/api'

import { Header, Alert, Form } from 'components'
import { Container } from './styles'

export default () => {
  const [alert, setAlert] = useState({})

  const handleSubmitForm = async (e, { id, data }) => {
    e.preventDefault()
    try {
      await api.updateNaver(id, data)

      setAlert({
        title: 'Naver atualizado',
        message: 'Naver atualizado com sucesso!',
        enable: true,
      })
    } catch (err) {
      setAlert({
        title: 'Erro ao atualizar naver!',
        message: 'Verifique todos os campos e tente novamente.',
        enable: true,
      })
    }
  }

  return (
    <Container>
      <Alert {...alert} setAlert={setAlert} />

      <Header />
      <Form titlePage="Editar Naver" type="edit" onSubmit={handleSubmitForm} />
    </Container>
  )
}
