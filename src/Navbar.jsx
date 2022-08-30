
import React from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar = ({imagen, precio}) => {

    const precioFormatiado = new Intl.NumberFormat().format(precio)
    console.log(imagen)
  return (
    <nav className="navbar bg-dark fixed">
        <div className="container-fluid">
            <div className='d-flex'>
            <img src={imagen.image} alt="" width="55" height="55" className="d-inline-block align-text-top rounded-5 mt-1" />
            <p className='text-white mt-2 mx-3 fs-3'>{imagen.name}</p>
            </div>
            <form className="d-flex" role="search">
            <button className="btn btn-success position-relative mx-3" type="submit">
                <BsCartCheck />
                <span class="position-absolute top-5 start-100 translate-middle badge rounded-5 bg-danger">
                    {precioFormatiado}
                </span>
            </button>
            <Link className="btn btn-outline-primary" to="/">
                    Inicio
                </Link>
            </form>
        </div>
    </nav>
  )
}

export default Navbar