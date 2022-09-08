
import { useContext } from 'react'
import { UserContext } from '../context/UserProvide'
import '../styles/barraTotal.css'
const BarraTotal = () => {

  const {valor} = useContext(UserContext);

  const nuevoValor = new Intl.NumberFormat().format(valor)
  return (
    <div className='baraTotal'>
      <h1 className='valor animate__animated animate__infinite animate__pulse'>Total : ${nuevoValor}</h1>
    </div>
  )
}

export default BarraTotal
