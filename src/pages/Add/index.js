import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

import Header from '../../components/Header'
import Input from '../../components/Input'
import backIcon from '../../assets/back.svg'
import Button from '../../components/Button'
import Alert from '../../components/Alert'
import InputDate from '../../components/InputDate'

import { Container, ContentContainer, HeaderContent, Form } from './styles'

export default () => {
  const { goBack } = useHistory()
  const [alert, setAlert] = useState({})

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [projects, setProjects] = useState('')
  const [office, setOffice] = useState('')
  const [timeJob, setTimeJob] = useState('')
  const [avatar, setAvatar] = useState('')

  const handleSubmitForm = async e => {
    e.preventDefault()
    try {
      await api.createNaver({ name, age, projects, office, timeJob, avatar })

      setAlert({
        title: 'Naver criado',
        message: 'Naver criado com sucesso!',
        enable: true,
      })
    } catch (err) {
      setAlert({
        title: 'Data errada ou campo invalido!',
        message: 'Verifique todos os campos e tente novamente.',
        enable: true,
      })
    }
  }

  return (
    <Container>
      <Alert {...alert} setAlert={setAlert} />

      <Header />
      <ContentContainer>
        <HeaderContent>
          <button type="button" onClick={goBack}>
            <img src={backIcon} alt="back page" />
          </button>
          <h2>Adicionar Naver</h2>
        </HeaderContent>
        <Form onSubmit={handleSubmitForm}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            name="name"
            label="Nome"
            className="name"
          />
          <Input
            value={office}
            onChange={e => setOffice(e.target.value)}
            type="text"
            label="Cargo"
            name="office"
            className="office"
          />
          <InputDate
            value={age}
            className="age"
            label="Idade"
            name="age"
            placeholder="Idade"
            onChange={setAge}
          />
          <InputDate
            value={timeJob}
            className="time-job"
            label="Tempo de empresa"
            name="timeJob"
            placeholder="Tempo de empresa"
            onChange={setTimeJob}
          />
          <Input
            value={projects}
            onChange={e => setProjects(e.target.value)}
            type="text"
            label="Projetos que participou"
            name="projects"
            className="projects"
          />
          <Input
            value={avatar}
            onChange={e => setAvatar(e.target.value)}
            type="text"
            label="URL da foto do Naver"
            name="avatar"
            className="avatar"
          />
          <Button className="button" type="submit" name="Criar" width="100%" />
        </Form>
      </ContentContainer>
    </Container>
  )
}
