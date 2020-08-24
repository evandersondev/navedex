import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Alert from '../../components/Alert'

import { Container, Content, HeaderContent, EmptyContent } from './styles'

export default () => {
  const [alert, setAlert] = useState({})
  const [navers, setNavers] = useState([])

  useEffect(() => {
    const getNavers = async () => {
      setNavers(await api.fecthAllNavers())
    }
    getNavers()
  }, [navers])

  return (
    <Container>
      <Alert {...alert} setAlert={setAlert} />

      <Header />
      <Content>
        <HeaderContent>
          <h2>Navers</h2>
          <Link to="/add">Adicionar Naver</Link>
        </HeaderContent>

        {navers.length > 0 ? (
          <Card navers={navers} setAlert={setAlert} />
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
