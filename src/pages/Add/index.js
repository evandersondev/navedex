import React, { useState } from 'react'
import { useAlert } from 'context/Alert'
import api from 'services/api'

import { Header, Alert, Form } from 'components'
import { Container } from './styles'

export default () => {
  const { showAlert } = useAlert()

  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [project, setProject] = useState('')
  const [job_role, setJobRole] = useState('')
  const [admission_date, setAdmissionDate] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmitForm = async (e, { data, setStates }) => {
    e.preventDefault()

    try {
      await api.createNaver(data)
      showAlert({
        title: 'Naver criado',
        message: 'Naver criado com sucesso!',
      })

      setStates.setName('')
      setStates.setBirthdate('')
      setStates.setJobRole('')
      setStates.setAdmissionDate('')
      setStates.setProject('')
      setStates.setUrl('')
    } catch (err) {
      showAlert({
        title: 'Erro ao cadastrar o naver!',
        message: 'Verifique todos os campos e tente novamente.',
      })
    }
  }

  return (
    <Container>
      <Alert />

      <Header />
      <Form
        titlePage="Adicionar Naver"
        onSubmit={handleSubmitForm}
        data={{
          name,
          birthdate,
          project,
          job_role,
          admission_date,
          url,
        }}
        setStates={{
          setName,
          setBirthdate,
          setProject,
          setJobRole,
          setAdmissionDate,
          setUrl,
        }}
      />
    </Container>
  )
}
