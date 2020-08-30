import React from 'react'
import { useAlert } from 'context/Alert'
import { useModal } from 'context/Modal'
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

export default ({ navers, setNavers }) => {
  const { alert, naverId, closeAlert, showAlert } = useAlert()
  const { closeModal } = useModal()

  const handleDeleteNaver = async () => {
    await api.deleteNaver(naverId)
    showAlert({
      title: 'Naver excluído',
      message: 'Naver excluído com sucesso!',
    })
    closeModal()
    setNavers(navers.filter(naver => naver.id !== naverId))
  }

  return (
    <Container show={alert.enable}>
      <ContentContainer actions={alert.actions}>
        <button type="button" onClick={closeAlert}>
          <img src={closeIcon} alt="close" />
        </button>
        <Title>{alert.title}</Title>
        <Message>{alert.message}</Message>
        {alert.actions && (
          <ActionsContainer>
            <Button
              type="button"
              onClick={closeAlert}
              name="Cancelar"
              color="light"
            />
            <Button type="button" onClick={handleDeleteNaver} name="Excluir" />
          </ActionsContainer>
        )}
      </ContentContainer>
    </Container>
  )
}
