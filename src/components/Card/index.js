import React from 'react'
import { useHistory } from 'react-router-dom'
import { useModal } from 'context/Modal'
import { useAlert } from 'context/Alert'
import api from 'services/api'

import editIcon from 'assets/edit.svg'
import trashIcon from 'assets/trash.svg'
import { Modal } from 'components'

import {
  ListCard,
  Container,
  AvatarContainer,
  ActionsContainer,
} from './styles'

export default ({ navers }) => {
  const { showModal } = useModal()
  const { showAlert } = useAlert()
  const { push } = useHistory()

  const handleDeletNaver = id => {
    showAlert({
      id,
      actions: true,
      title: 'Excluir Naver',
      message: 'Tem certeza que deseja excluir este Naver?',
    })
  }

  const handleModalShow = async id => {
    const data = await api.showNaver(id)
    showModal(data)
  }

  return (
    <ListCard>
      <Modal />

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
            <button type="button" onClick={() => push(`edit/${naver.id}`)}>
              <img src={editIcon} alt="edit" />
            </button>
          </ActionsContainer>
        </Container>
      ))}
    </ListCard>
  )
}
