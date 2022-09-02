
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import '../styles/estilos.css'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserProvide'

const Tablas = () => {

  const {id} = useParams()

  const {cantidad} = useContext(UserContext);

  const [data, setData] = useState([])
  
  const consumoApi = async() => {

    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const datos = await res.json()
      // console.log(datos)
      setData(datos)
    } catch (error) {
      console.log(error)
    }
  }

  let item = [];

  for(let i = 1; i<= cantidad; i++){
    item.push(i)
  }

  // console.log(item)

  useEffect(() => {
    consumoApi()
  },[])
  return (
    <div className='container mt-3'>
      {cantidad}
      <hr />
      {id}

      <div className='contenedor shadow'>
        <div className='bara'></div>
      </div>
    </div>
  )
}

export default Tablas
