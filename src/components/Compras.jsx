import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import Loading from './Loading'
const Compras = () => {

  const {id} = useParams()
  const [valor, setValor] = useState(500)

  let nuevoNumero = new Intl.NumberFormat().format(valor)
  // console.log(nuevoNumero)
  const [loading, setLoading] = useState(false)

  const handleClickSumar = () => {
    setValor(valor + 500)
  }

  const handleClickRestar = () => {
    setValor(valor - 500)
    if(valor === 500){
      setValor(500)
    }
  }

  const handleClick = () => {
    if(valor >= 500){
      Swal.fire({
        icon: 'success',
        title: 'Felicidades',
        text: `Compraste a : ${data.name} Con un valor de : $${nuevoNumero}`,
        imageUrl: `${data.image}`,
        imageHeight: 200
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
    <div className='container mt-2'>
        <div className="row justify-content-center">
        <div className="col-md-8 col-lg-5">
        <div className="card shadow text-bg-dark">
          <img src={data.image} className="card-img-top" alt={`Esta es la foto de ${data.name}`} />
        <div className="card-body">
          <h1 className="lead fs-1 text-center">{data.name}</h1>
          <h2 className="lead fs-1 text-center">{data.species}</h2>
          <h2 className='alert alert-success lead fs-2 text-center'>
            <i className="bi bi-currency-dollar"></i>
            {nuevoNumero}
            <button onClick={handleClickSumar} className="btn btn-success mx-3">+</button>
            <button onClick={handleClickRestar} className="btn btn-danger">-</button>
          </h2>
          {data.status === 'Alive' ? <h4 className='lead text-success'>Status : {data.status}</h4> : <h4 className='lead text-danger'>Status : {data.status}</h4>}
          <p className="card-text">{data.type}</p>
            {data.gender === 'Male' ? <h5 className='lead'>Genero : {data.gender}</h5> : <h5 className='lead text-warning'>Genero : {data.gender}</h5>}
          <button onClick={handleClick} className="btn btn-primary w-100">Comprar</button>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
export default Compras