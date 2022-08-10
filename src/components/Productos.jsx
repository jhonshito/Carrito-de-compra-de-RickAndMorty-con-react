
import { Link } from "react-router-dom"

const Productos = ({datos}) => {
    // console.log(datos)

  return (
    <div className="col-md-4 mb-2">
        <div className="card shadow">
            <img src={datos.image} className="card-img-top" alt={`esta es la imagen de: ${datos.name}`} />
            <div className="card-body">
                <h2 className="">{datos.name}</h2>
                <p className="card-text"></p>
                <h5><i className="bi bi-currency-dollar"></i>500🤑</h5>
                <Link to={`/compras/${datos.id}`} className="btn btn-success w-100" >
                  <i className="bi bi-currency-dollar"></i>
                  comprar
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Productos