import React, { createContext, useContext, useState } from 'react'

const AlertContext = createContext()

export default function AlertProvider({ children }) {
  const [alert, setAlert] = useState({})
  const [naverId, setNaverId] = useState('')

  const showAlert = ({ title, message, actions = false, id = '' }) => {
    setAlert({
      title,
      message,
      actions,
      enable: true,
    })
    setNaverId(id)
  }

  const closeAlert = () => {
    setAlert({ enable: false })
  }

  return (
    <AlertContext.Provider
      value={{
        alert,
        showAlert,
        naverId,
        closeAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export function useAlert() {
  const { alert, showAlert, naverId, closeAlert } = useContext(AlertContext)
  return {
    alert,
    showAlert,
    naverId,
    closeAlert,
  }
}
