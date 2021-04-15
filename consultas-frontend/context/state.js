import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

function updateState(id) {

}

export function AppWrapper({ children }) {

  let state =  {
    agendamentos:[
      { id: 1, paciente: 'Fulano', medico: 'Ciclano', data: '2020-10-10' },
      { id: 2, paciente: 'Beltrano', medico: 'João', data: '2020-10-10' },
      { id: 3, paciente: 'Zé', medico: 'Nelson', data: '2020-10-10' },
    ]
  }


  return (
    <AppContext.Provider 
      value={{
        state, 
        updateState
        }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}