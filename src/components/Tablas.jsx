
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link } from "react-router-dom"
import '../styles/estilos.css'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserProvide'
import BarraTotal from './BarraTotal'

const Tablas = () => {

  const {id} = useParams()

  const {cantidad} = useContext(UserContext);

  const [data, setData] = useState([]);
  const [genero, setGenero] = useState();
  const [estado, setEstado] = useState();
  const [especie, setEspecie] = useState();
  
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

  const generoDelPersonaje = () => {

    if(data.gender === "Female"){
      setGenero('text-primari')
      console.log('female')
    }else {
      setGenero('text-succes')
    }

    if(data.status === 'Alive'){
      setEstado('text-success')
    }else {
      setEstado('text-danger')
    }

    if(data.species === 'Human'){
      setEspecie('text-warning')
    }else {
      setEspecie('text-danger')
    }
  }

  let item = [];

  for(let i = 1; i<= cantidad; i++){
    item.push(i)
  }

  // console.log(item)

  useEffect(() => {
    consumoApi()
    generoDelPersonaje()
  },[])
  return (
    <div className='container mt-3'>

      <div className="contenido animate__animated animate__backInDown">
        <div className="personaje">
          <div className='contenedor-imagen'>
            <img className='imagen-personaje shadow' src={data.image} alt="" />
          </div>
            <h4>{data.name}</h4>
            <hr className='linea' />
          <div className='contenido-parrafo'>
            <div className="genero-color">
              <h3 className='genero'>Genero :</h3>
              <h3 className={genero}>{data.gender}</h3>
            </div>
            <div className="genero-color">
              <h3 className='genero'>Estado :</h3>
              <h3 className={estado}>{data.status}</h3>
            </div>
          </div>
          <div className="especie-color">
            <h5>Especie :</h5>
            <h5 className={especie}>{data.species}</h5>
          </div>
            <BarraTotal />
        </div>
        <div className='contenedor shadow'>
        {
          item.map(items => {
            console.log(items)
            return  <div className='bara shadow'>
                      <div className="posicion-izquierda">
                        <img className='imagen' src={data.image} alt="" />
                        <p className='name'>$500</p>
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
