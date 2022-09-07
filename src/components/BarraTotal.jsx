
import { useContext } from 'react'
import { UserContext } from '../context/UserProvide'
import '../styles/barraTotal.css'
const BarraTotal = () => {

  const {valor} = useContext(UserContext);

  const nuevoValor = new Intl.NumberFormat().format(valor)
  return (
    <div className='baraTotal shadow'>
      <h1 className='valor'>Total : ${nuevoValor}</h1>
    </div>
  )
}

export default BarraTotal
