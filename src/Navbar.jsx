
import React from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar = ({imagen, precio}) => {

    // console.log(imagen)

    // const handleProducto = (e) => {
    //     e.preventDefault()
    //     console.log(precio)
    // }

    const precioFormatiado = new Intl.NumberFormat().format(precio)
    // console.log(imagen)
  return (
    <nav className="navbar bg-dark fixed">
        <div className="container-fluid">
            <div className='d-flex'>
            <img src={imagen.image} alt="" width="55" height="55" className="d-inline-block align-text-top rounded-5 mt-1 animate__animated animate__infinite animate__pulse" />
            <p className='text-white mt-2 mx-3 fs-3'>{imagen.name}</p>
            </div>
            <form className="d-flex" role="search">
            <Link to={`/Tablas/${imagen.id}`} className="btn btn-success position-relative mx-3">
                <BsCartCheck />
                <span className="position-absolute top-5 start-100 translate-middle badge rounded-5 bg-danger">
                    {precioFormatiado}
                </span>
            </Link>
            <Link className="btn btn-outline-primary" to="/">
                    Inicio
            </Link>
            </form>
        </div>
    </nav>
  )
}

export default Navbar