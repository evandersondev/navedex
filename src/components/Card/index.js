import React from 'react'

import editIcon from '../../assets/edit.svg'
import trashIcon from '../../assets/trash.svg'

import { Container, AvatarContainer, ActionsContainer } from './styles'

export default ({ name, office, avatar, setAlert, setModal }) => {
  const handleDeletNaver = () => {
    setAlert({
      title: 'Excluir Naver',
      message: 'Tem certeza que deseja excluir este Naver?',
      actions: true,
      enable: true,
    })
  }

  const handleModalShow = () => {
    setModal({ enable: true })
  }

  return (
    <Container>
      <AvatarContainer onClick={handleModalShow}>
        <img src={avatar} alt="avatar" />
      </AvatarContainer>
      <strong>{name}</strong>
      <p>{office}</p>
      <ActionsContainer>
        <button type="button" onClick={handleDeletNaver}>
          <img src={trashIcon} alt="delete" />
        </button>
        <button type="button">
          <img src={editIcon} alt="edit" />
        </button>
      </ActionsContainer>
    </Container>
  )
}
