import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import api from 'services/api'

import backIcon from 'assets/back.svg'
import { Input, InputDate, Button } from 'components'
import { ContentContainer, HeaderContent, Form } from './styles'

export default ({ titlePage, type, onSubmit }) => {
  const { push } = useHistory()
  const { state } = useLocation()

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [project, setProject] = useState('')
  const [job_role, setJobRole] = useState('')
  const [admission_date, setAdmissionDate] = useState('')
  const [url, setUrl] = useState('')

  const renderNaver = async () => {
    const data = await api.showNaver(state.id)
    setId(data.id)
    setName(data.name)
    setBirthdate(data.birthdate)
    setJobRole(data.job_role)
    setAdmissionDate(data.admission_date)
    setProject(data.project)
    setUrl(data.url)
  }

  useEffect(() => {
    type === 'edit' && renderNaver()
  }, [type])

  return (
    <ContentContainer>
      <HeaderContent>
        <button type="button" onClick={() => push('/home')}>
          <img src={backIcon} alt="back page" />
        </button>
        <h2>{titlePage}</h2>
      </HeaderContent>
      <Form
        onSubmit={e =>
          onSubmit(e, {
            id,
            data: {
              name,
              birthdate,
              project,
              job_role,
              admission_date,
              url,
            },
            states: {
              setName,
              setBirthdate,
              setJobRole,
              setAdmissionDate,
              setProject,
              setUrl,
            },
          })
        }
      >
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          label="Nome"
          className="name"
        />
        <Input
          value={job_role}
          onChange={e => setJobRole(e.target.value)}
          type="text"
          label="Cargo"
          name="office"
          className="office"
        />
        <InputDate
          value={birthdate}
          className="age"
          label="Idade"
          name="age"
          placeholder="Idade"
          onChange={setBirthdate}
        />
        <InputDate
          value={admission_date}
          className="time-job"
          label="Tempo de empresa"
          name="timeJob"
          placeholder="Tempo de empresa"
          onChange={setAdmissionDate}
        />
        <Input
          value={project}
          onChange={e => setProject(e.target.value)}
          type="text"
          label="Projetos que participou"
          name="projects"
          className="projects"
        />
        <Input
          value={url}
          onChange={e => setUrl(e.target.value)}
          type="text"
          label="URL da foto do Naver"
          name="avatar"
          className="avatar"
        />
        <Button className="button" type="submit" name="Salvar" width="100%" />
      </Form>
    </ContentContainer>
  )
}
