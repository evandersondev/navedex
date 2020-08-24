import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import editIcon from '../../assets/edit.svg'
import trashIcon from '../../assets/trash.svg'

import {
  ListCard,
  Container,
  AvatarContainer,
  ActionsContainer,
} from './styles'
import Modal from '../Modal'
import api from '../../services/api'

export default ({ navers, setAlert }) => {
  const { push } = useHistory()
  const [modal, setModal] = useState({})

  const handleDeletNaver = id => {
    setAlert({
      title: 'Excluir Naver',
      message: 'Tem certeza que deseja excluir este Naver?',
      actions: true,
      enable: true,
      id,
    })
  }

  const handleModalShow = async id => {
    const data = await api.showNaver(id)
    setModal({
      enable: !!data,
      data: {
        ...data,
        birthdate: data.birthdate.toLocaleDateString('pt-BR'),
        admission_date: data.admission_date.toLocaleDateString('pt-BR'),
      },
    })
  }

  return (
    <ListCard>
      <Modal {...modal} setModal={setModal} setAlert={setAlert} />

      {navers.map(naver => (
        <Container key={naver.id}>
          <AvatarContainer onClick={() => handleModalShow(naver.id)}>
            <img src={naver.url} alt="avatar" />
          </AvatarContainer>
          <strong>{naver.name}</strong>
          <p>{naver.job_role}</p>
          <ActionsContainer>
            <button type="button" onClick={() => handleDeletNaver(naver.id)}>
              <img src={trashIcon} alt="delete" />
            </button>
            <button
              type="button"
              onClick={() => push('/edit', { id: naver.id })}
            >
              <img src={editIcon} alt="edit" />
            </button>
          </ActionsContainer>
        </Container>
      ))}
    </ListCard>
  )
}
