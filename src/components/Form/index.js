import React from 'react'
import { useHistory } from 'react-router-dom'

import backIcon from 'assets/back.svg'
import { Input, InputDate, Button } from 'components'
import { ContentContainer, HeaderContent, Form } from './styles'

export default ({ titlePage, data, setStates, onSubmit }) => {
  const { push } = useHistory()

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
            data,
            setStates,
          })
        }
      >
        <Input
          value={data.name}
          onChange={e => setStates.setName(e.target.value)}
          type="text"
          name="name"
          label="Nome"
          className="name"
        />
        <Input
          value={data.job_role}
          onChange={e => setStates.setJobRole(e.target.value)}
          type="text"
          label="Cargo"
          name="office"
          className="office"
        />
        <InputDate
          value={data.birthdate}
          className="age"
          label="Idade"
          name="age"
          placeholder="Idade"
          onChange={setStates.setBirthdate}
        />
        <InputDate
          value={data.admission_date}
          className="time-job"
          label="Tempo de empresa"
          name="timeJob"
          placeholder="Tempo de empresa"
          onChange={setStates.setAdmissionDate}
        />
        <Input
          value={data.project}
          onChange={e => setStates.setProject(e.target.value)}
          type="text"
          label="Projetos que participou"
          name="projects"
          className="projects"
        />
        <Input
          value={data.url}
          onChange={e => setStates.setUrl(e.target.value)}
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
