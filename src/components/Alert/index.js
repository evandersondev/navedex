import React from 'react'
import api from 'services/api'

import closeIcon from 'assets/close.svg'
import { Button } from 'components'

import {
  Container,
  ContentContainer,
  Title,
  Message,
  ActionsContainer,
} from './styles'

export default ({
  title,
  message,
  actions,
  enable,
  setAlert,
  id,
  navers,
  setNavers,
  setModal,
}) => {
  const naverDeleted = async () => {
    await api.deleteNaver(id)
    setAlert({
      title: 'Naver excluído',
      message: 'Naver excluído com sucesso!',
      enable: true,
    })
    setModal({ enable: false })
    setNavers(navers.filter(naver => naver.id !== id))
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
