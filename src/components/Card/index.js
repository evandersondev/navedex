import React from 'react'

import editIcon from '../../assets/edit.svg'
import trashIcon from '../../assets/trash.svg'

import { Container, AvatarContainer, ActionsContainer } from './styles'

export default ({ name, office, avatar }) => {
  return (
    <Container>
      <AvatarContainer>
        <img src={avatar} alt="avatar" />
      </AvatarContainer>
      <strong>{name}</strong>
      <p>{office}</p>
      <ActionsContainer>
        <button>
          <img src={trashIcon} alt="delete" />
        </button>
        <button>
          <img src={editIcon} alt="edit" />
        </button>
      </ActionsContainer>
    </Container>
  )
}
