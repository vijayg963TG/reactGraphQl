import { useQuery } from "@apollo/client"
import { GET_DATA } from "../graphql/query"
import { Link } from "react-router-dom"

export const ShowDogs = () => {
  const { loading, error, data } = useQuery(GET_DATA)
  console.log(data.locations)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  return <>
  <button><Link to={"/"}>Home</Link></button>
  {data.locations.map((elm:any)=>(
    <>
    <h3>{elm.name}</h3>
    <img width={350} src={elm.photo} alt="photo" />
    </>
  ))}
  </>
}
