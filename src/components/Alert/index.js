import React from 'react'

import closeIcon from '../../assets/close.svg'

import {
  Container,
  ContentContainer,
  Title,
  Message,
  ActionsContainer,
} from './styles'
import Button from '../Button'

const Alert = ({ title, message, actions, enable, setAlert }) => {
  const naverDeleted = () => {
    setAlert({
      title: 'Naver excluído',
      message: 'Naver excluído com sucesso!',
      enable: true,
    })
  }

  const closeAlert = () => {
    setAlert({ enable: false })
  }

  return (
    <Container show={enable}>
      <ContentContainer actions={actions}>
        <button type="button" onClick={closeAlert}>
          <img src={closeIcon} alt="close" />
        </button>
        <Title>{title}</Title>
        <Message>{message}</Message>
        {actions && (
          <ActionsContainer>
            <Button
              type="button"
              onClick={closeAlert}
              name="Cancelar"
              color="light"
            />
            <Button type="button" onClick={naverDeleted} name="Excluir" />
          </ActionsContainer>
        )}
      </ContentContainer>
    </Container>
  )
}

export default Alert
