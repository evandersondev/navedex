import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

import Header from '../../components/Header'
import Input from '../../components/Input'
import backIcon from '../../assets/back.svg'
import Button from '../../components/Button'

import { Container, ContentContainer, HeaderContent, Form } from './styles'
import Alert from '../../components/Alert'

export default () => {
  const { goBack } = useHistory()
  const [alert, setAlert] = useState({})

  const [naver, setNaver] = useState({
    name: '',
    age: '',
    projects: '',
    office: '',
    timeJob: '',
    avatar: '',
  })

  const handleSubmitForm = async e => {
    e.preventDefault()
    console.log(naver.age)

    // try {
    //   await api.createNaver({ ...naver })
    //   setAlert({
    //     title: 'Naver criado',
    //     message: 'Naver criado com sucesso!',
    //     enable: true,
    //   })
    //   setNaver({
    //     name: '',
    //     age: '',
    //     projects: '',
    //     office: '',
    //     timeJob: '',
    //     avatar: '',
    //   })
    // } catch (err) {
    //   console.log(err)
    // }
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
            value={naver.name}
            onChange={e => setNaver({ ...naver, name: e.target.value })}
            type="text"
            label="Nome"
            name="name"
            className="name"
          />
          <Input
            value={naver.age}
            onChange={e => setNaver({ ...naver, age: e.target.value })}
            type="date"
            placeholder="dd/mm/yyyy"
            label="Idade"
            name="age"
            className="age"
          />
          <Input
            value={naver.projects}
            onChange={e => setNaver({ ...naver, projects: e.target.value })}
            type="text"
            label="Projetos que participou"
            name="projects"
            className="projects"
          />
          <Input
            value={naver.office}
            onChange={e => setNaver({ ...naver, office: e.target.value })}
            type="text"
            label="Cargo"
            name="office"
            className="office"
          />
          <Input
            value={naver.timeJob}
            onChange={e => setNaver({ ...naver, timeJob: e.target.value })}
            type="text"
            label="Tempo de empresa"
            name="time-job"
            className="time-job"
          />
          <Input
            value={naver.avatar}
            onChange={e => setNaver({ ...naver, avatar: e.target.value })}
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
