import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export default function ModalProvider({ children }) {
  const [modal, setModal] = useState({})

  const showModal = data => {
    setModal({
      enable: true,
      data: {
        ...data,
        birthdate: data.birthdate.toLocaleDateString('pt-BR'),
        admission_date: data.admission_date.toLocaleDateString('pt-BR'),
      },
    })
  }

  const closeModal = () => {
    setModal({ enable: false })
  }

  return (
    <ModalContext.Provider value={{ modal, showModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const { modal, showModal, closeModal } = useContext(ModalContext)
  return { modal, showModal, closeModal }
}
