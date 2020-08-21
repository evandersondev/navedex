import React from 'react'

import Header from '../../components/Header'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Modal from '../../components/Modal'

import { Container, Content, HeaderContent, ListCard } from './styles'

export default () => {
  return (
    <Container>
      {/* <Modal /> */}

      <Header />
      <Content>
        <HeaderContent>
          <h2>Navers</h2>
          <Button type="button" name="Adicionar Naver" />
        </HeaderContent>

        <ListCard>
          <Card
            avatar="https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg"
            name="Joana Help"
            office="Fullstack Javascript"
          />

          <Card
            avatar="https://image.freepik.com/fotos-gratis/hacker-com-mascara-anonima_23-2147985387.jpg"
            name="Diego Fernandes"
            office="CTO Rocketseat"
          />

          <Card
            avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ58T8jR6XrVg8u9jbF-ccmK64_9SskCBQwGQ&usqp=CAU"
            name="La Casita"
            office="Sr PHP"
          />

          <Card
            avatar="https://image.freepik.com/fotos-gratis/modelo-de-foto-bonita_1157-7654.jpg"
            name="Rychillie Umpierre"
            office="Freelancer"
          />
        </ListCard>
      </Content>
    </Container>
  )
}
