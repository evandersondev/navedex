import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import Alert from '../../components/Alert'

import { Container, Content, HeaderContent, ListCard } from './styles'

export default () => {
  const [alert, setAlert] = useState({})
  const [modal, setModal] = useState({})

  useEffect(() => {
    api.fecthAllNavers()
  }, [])

  return (
    <Container>
      <Alert {...alert} setAlert={setAlert} />
      <Modal {...modal} setModal={setModal} setAlert={setAlert} />

      <Header />
      <Content>
        <HeaderContent>
          <h2>Navers</h2>
          <Link to="/add">Adicionar Naver</Link>
        </HeaderContent>

        <ListCard>
          <Card
            avatar="https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg"
            name="Joana Help"
            office="Fullstack Javascript"
            setAlert={setAlert}
            setModal={setModal}
          />
        </ListCard>
      </Content>
    </Container>
  )
}
