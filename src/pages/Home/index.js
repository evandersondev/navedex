import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from 'services/api'

import { Header, Card, Alert, Loading } from 'components'
import { Container, Content, HeaderContent, EmptyContent } from './styles'

export default () => {
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({})
  const [navers, setNavers] = useState([])

  useEffect(() => {
    getNavers()
  }, [])

  const getNavers = async () => {
    setLoading(true)
    setNavers(await api.getAllNavers())
    setLoading(false)
  }

  return (
    <Container>
      <Alert {...alert} setAlert={setAlert} setLoading={setLoading} />
      {loading && <Loading />}

      <Header />
      <Content>
        <HeaderContent>
          <h2>Navers</h2>
          <Link to="/add">Adicionar Naver</Link>
        </HeaderContent>

        {navers.length > 0 ? (
          <Card navers={navers} setNavers={setNavers} setAlert={setAlert} />
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
