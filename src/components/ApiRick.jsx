import { useEffect, useState } from "react"
import Loading from "./Loading"
import Productos from "./Productos"

const ApiRick = () => {

    const [data, setData] = useState([])






    

    const [loading, setLoading] = useState(false)
    const fetchApi = async() => {
        try {
            setLoading(true)
            const res = await fetch('https://rickandmortyapi.com/api/character')
            const datos = await res.json()
            setData(datos.results)
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
    <div className="row mt-3">

        {
            data.map(item => (

                <Productos key={item.id} datos={item} />
            ))
        }
    </div>
  )
}

export default ApiRick