
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

  const [data, setData] = useState([]);
  const [estado, setEstado] = useState()
  
  const consumoApi = async() => {

    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const datos = await res.json()
      console.log(datos)
      setData(datos)
    } catch (error) {
      console.log(error)
    }
  }

  const estadoDelPersonaje = () => {

    if(data.gender == 'Female'){
      setEstado('text-primary')
    }else {
      setEstado('text-success')
    }
  }

  let item = [];

  for(let i = 1; i<= cantidad; i++){
    item.push(i)
  }

  // console.log(item)

  useEffect(() => {
    consumoApi()
    estadoDelPersonaje()
  },[])
  return (
    <div className='container mt-3'>
      {cantidad}
      <hr />
      {id}

      <div className="contenido">
        <div className="personaje">
          <div className='contenedor-imagen'>
            <img className='imagen-personaje shadow' src={data.image} alt="" />
          </div>
            <h4>{data.name}</h4>
          <div className='contenido-parrafo'>
            <h3 className={estado}>Genero : {data.gender}</h3>
            <h3>Estado : {data.status}</h3>
          </div>
          <h5>Especie : {data.species}</h5>
        </div>
        <div className='contenedor shadow'>
        {
          item.map(items => {
            console.log(items)
            return  <div className='bara shadow'>
                      <div className="posicion-izquierda">
                        <img className='imagen' src={data.image} alt="" />
                        <p className='name'>{cantidad}</p>
                      </div>
                      <div className="botones shadow">
                        <button>Eliminar</button>
                      </div>
                    </div>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Tablas
