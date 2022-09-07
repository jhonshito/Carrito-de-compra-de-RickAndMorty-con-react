import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import Loading from './Loading'
import Navbar from '../Navbar'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvide'
const Compras = () => {

  const {id} = useParams()
  const {cantidad, setCantidad, valor, setValor} = useContext(UserContext)
  // const [valor, setValor] = useState(500)

  let nuevoNumero = new Intl.NumberFormat().format(valor)
  // console.log(nuevoNumero)
  const [loading, setLoading] = useState(false)

  const handleClickSumar = () => {
    setValor(valor + 500)
    setCantidad(cantidad + 1)
  }

  const handleClickRestar = () => {
    setValor(valor - 500)
    setCantidad(cantidad - 1)

    if(cantidad === 1){
      setCantidad(1)
    }

    if(valor === 500){
      setValor(500)
    }
  }

  const handleClick = () => {

    setValor(500)
    if(valor >= 500){
      Swal.fire({
        title: 'Felicidades',
        text: `Compraste a : ${data.name} Con un valor de : $${nuevoNumero}`,
        imageUrl: `${data.image}`,
        imageWidth: 400,
        imageHeight: 250
      })
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Ooops.. Error',
        text: `El valor de: $${valor} No esta permitido La compra de : ${data.name} Hacido rechazada Intentalo de nuevo con un valor mayor o igual a 200`,
      })
    }
  }
  const [data, setData] = useState([])
  // console.log(data)
  const fetchApi = async() => {
      try {
        setLoading(true)
          const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
          const datos = await res.json()
          setData(datos)
          // console.log(datos)
      } catch (error) {
          console.log(error)
      }finally{
        setLoading(false)
      }
  }


  useEffect(() => {
      fetchApi()
  },[])

  if(loading){
    return <Loading />
  }
  return (

    <div className='container-fluid'>
      <Navbar imagen={data} precio={cantidad} />

    <div className="row justify-content-around my-5">
      <div className="col-md-8 col-lg-5 align-self-center">
      <div className="card mb-3 bg-dark text-white">
        <div className="row">
          <div className="col-md-4">
            <img src={data.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <h2 className="lead fs-4">Especie : {data.species}</h2>
              <div className='alert alert-success lead fs-2 text-center'>
                <i className="bi bi-currency-dollar"></i>
                {nuevoNumero}
                <button onClick={handleClickSumar} className="btn btn-success mx-3">+</button>
                <button onClick={handleClickRestar} className="btn btn-danger">-</button>
              </div>
              {data.status === 'Alive' ? <h4 className='lead text-success'>Status : {data.status}</h4> : <h4 className='lead text-danger'>Status : {data.status}</h4>}
              <p className="card-text">{data.type}</p>
              {data.gender === 'Male' ? <h5 className='lead'>Genero : {data.gender}</h5> : <h5 className='lead text-warning'>Genero : {data.gender}</h5>}
              <button onClick={handleClick} className="btn btn-primary w-100">Comprar</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
export default Compras