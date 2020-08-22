import React from 'react'

import closeIcon from '../../assets/close.svg'
import trashIcon from '../../assets/trash.svg'
import editIcon from '../../assets/edit.svg'

import {
  Container,
  ModalContainer,
  AvatarContainer,
  InfoContainer,
  Info,
  ActionsContainer,
} from './styles'

export default ({ enable, setModal, setAlert }) => {
  const handleDeletNaver = () => {
    setAlert({
      title: 'Excluir Naver',
      message: 'Tem certeza que deseja excluir este Naver?',
      actions: true,
      enable: true,
    })
  }

  const closeModal = () => {
    setModal({ enable: false })
  }
  return (
    <Container enable={enable}>
      <ModalContainer>
        <AvatarContainer>
          <img
            src="https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg"
            alt="eu"
          />
        </AvatarContainer>
        <InfoContainer>
          <button type="button" onClick={closeModal}>
            <img src={closeIcon} alt="close" />
          </button>

          <Info>
            <h2>Jurema Juptem</h2>
            <p>Front-end Developer</p>
            <strong>Idade</strong>
            <p>Lorem ipsum</p>
            <strong>Tempo de empresa</strong>
            <p>Lorem ipsum</p>
            <strong>Projetos que participou</strong>
            <p>Lorem ipsum</p>
          </Info>

          <ActionsContainer>
            <button type="button" onClick={handleDeletNaver}>
              <img src={trashIcon} alt="delete" />
            </button>
            <button>
              <img src={editIcon} alt="edit" />
            </button>
          </ActionsContainer>
        </InfoContainer>
      </ModalContainer>
    </Container>
  )
}
