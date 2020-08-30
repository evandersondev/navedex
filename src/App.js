import React from 'react'
import ModalProvider from './context/Modal'
import AlertProvider from './context/Alert'

import Routes from './routes'
import GlobalStyle from './styles/global'

export default () => {
  return (
    <AlertProvider>
      <ModalProvider>
        <Routes />
        <GlobalStyle />
      </ModalProvider>
    </AlertProvider>
  )
}
