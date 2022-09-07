
import React from 'react'
import { useState, createContext } from 'react'

export const UserContext = createContext()

const UserProvide = (props) => {
  const [cantidad, setCantidad] = useState(1);
  const [valor, setValor] = useState(500)

  return (
    <UserContext.Provider value={{setCantidad, cantidad, valor, setValor}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserProvide