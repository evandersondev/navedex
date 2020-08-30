import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAlert } from 'context/Alert'
import api from 'services/api'

import { Header, Alert, Form } from 'components'
import { Container } from './styles'

export default () => {
  const { showAlert } = useAlert()
  const { id } = useParams()

  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [project, setProject] = useState('')
  const [job_role, setJobRole] = useState('')
  const [admission_date, setAdmissionDate] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    api.showNaver(id).then(data => {
      setName(data.name)
      setBirthdate(data.birthdate)
      setProject(data.project)
      setJobRole(data.job_role)
      setAdmissionDate(data.admission_date)
      setUrl(data.url)
    })
  }, [id])

  const handleSubmitForm = async (e, { id, data }) => {
    e.preventDefault()

    try {
      await api.updateNaver(id, data)
      showAlert({
        title: 'Naver atualizado',
        message: 'Naver atualizado com sucesso!',
      })
    } catch (err) {
      showAlert({
        title: 'Erro ao atualizar naver!',
        message: 'Verifique todos os campos e tente novamente.',
      })
    }
  }

  return (
    <Container>
      <Alert />

      <Header />
      <Form
        titlePage="Editar Naver"
        type="edit"
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
