import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

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

export default ({ enable, setModal, setAlert, data, navers, setNavers }) => {
  const history = useHistory()
  const [naver, setNaver] = useState({})

  const handleDeletNaver = id => {
    setAlert({
      title: 'Excluir Naver',
      message: 'Tem certeza que deseja excluir este Naver?',
      actions: true,
      enable: true,
      id,
      navers,
      setNavers,
      setModal,
    })
  }

  useEffect(() => {
    setNaver(data)
  }, [data])

  const closeModal = () => {
    setModal({ enable: false })
    setNaver({})
  }
  return (
    <Container enable={enable}>
      {naver && (
        <ModalContainer>
          <AvatarContainer>
            <img src={naver.url} alt={naver.name} />
          </AvatarContainer>
          <InfoContainer>
            <button type="button" onClick={closeModal}>
              <img src={closeIcon} alt="close" />
            </button>

            <Info>
              <h2>{naver.name}</h2>
              <p>{naver.job_role}</p>
              <strong>Idade</strong>
              <p>{naver.birthdate}</p>
              <strong>Tempo de empresa</strong>
              <p>{naver.admission_date}</p>
              <strong>Projetos que participou</strong>
              <p>{naver.project}</p>
            </Info>

            <ActionsContainer>
              <button type="button" onClick={() => handleDeletNaver(naver.id)}>
                <img src={trashIcon} alt="delete" />
              </button>
              <button>
                <img
                  onClick={() => history.push('/edit', { id: naver.id })}
                  src={editIcon}
                  alt="edit"
                />
              </button>
            </ActionsContainer>
          </InfoContainer>
        </ModalContainer>
      )}
    </Container>
  )
}
