import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from 'services/api'

import { Header, Card, Alert, Loading } from 'components'
import { Container, Content, HeaderContent, EmptyContent } from './styles'

export default () => {
  const [loading, setLoading] = useState(false)
  const [navers, setNavers] = useState([])

  const getNavers = async () => {
    setLoading(true)
    setNavers(await api.getAllNavers())
    setLoading(false)
  }

  useEffect(() => {
    getNavers()
  }, [])

  return (
    <Container>
      <Alert navers={navers} setNavers={setNavers} />
      {loading && <Loading />}

      <Header />
      <Content>
        <HeaderContent>
          <h2>Navers</h2>
          <Link to="/add">Adicionar Naver</Link>
        </HeaderContent>

        {navers.length > 0 ? (
          <Card navers={navers} setNavers={setNavers} />
        ) : (
          <EmptyContent>
            <h1>Não há navers cadastrados</h1>
            <p>
              Clique em <strong>Adicionar naver</strong> para cadastrar
            </p>
          </EmptyContent>
        )}
      </Content>
    </Container>
  )
}
