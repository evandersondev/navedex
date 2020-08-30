import React from 'react'
import { useHistory } from 'react-router-dom'
import { useModal } from 'context/Modal'
import { useAlert } from 'context/Alert'

import closeIcon from 'assets/close.svg'
import trashIcon from 'assets/trash.svg'
import editIcon from 'assets/edit.svg'

import {
  Container,
  ModalContainer,
  AvatarContainer,
  InfoContainer,
  Info,
  ActionsContainer,
} from './styles'

export default () => {
  const history = useHistory()
  const { showAlert } = useAlert()
  const { modal, closeModal } = useModal()

  const handleDeletNaver = id => {
    showAlert({
      id,
      actions: true,
      title: 'Excluir Naver',
      message: 'Tem certeza que deseja excluir este Naver?',
    })
  }

  return (
    <Container enable={modal.enable}>
      {modal.enable && (
        <ModalContainer>
          <AvatarContainer>
            <img src={modal.data.url} alt={modal.data.name} />
          </AvatarContainer>
          <InfoContainer>
            <button type="button" onClick={closeModal}>
              <img src={closeIcon} alt="close" />
            </button>

            <Info>
              <h2>{modal.data.name}</h2>
              <p>{modal.data.job_role}</p>
              <strong>Idade</strong>
              <p>{modal.data.birthdate}</p>
              <strong>Tempo de empresa</strong>
              <p>{modal.data.admission_date}</p>
              <strong>Projetos que participou</strong>
              <p>{modal.data.project}</p>
            </Info>

            <ActionsContainer>
              <button
                type="button"
                onClick={() => handleDeletNaver(modal.data.id)}
              >
                <img src={trashIcon} alt="delete" />
              </button>
              <button
                type="button"
                onClick={() => history.push(`edit/${modal.data.id}`)}
              >
                <img src={editIcon} alt="edit" />
              </button>
            </ActionsContainer>
          </InfoContainer>
        </ModalContainer>
      )}
    </Container>
  )
}
