import { useQuery } from "@apollo/client"
import { SHIPS } from "../graphql/query"
import { Link } from "react-router-dom"
import "../stylesheet/ship.css"

export const Capsules = () => {
  const { loading, error, data } = useQuery(SHIPS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  const { ships } = data
  return (
    <>
      <button>
        <Link to={"/"}>Home</Link>
      </button>
      {data && (
        <div className="shipConstainer">
          {ships.map((elm: any) => (
            <div className="shipCard" key={elm.id}>
              <img width={320} height={200} src={elm.image} alt="shipImg" />
              <div>
                <p>
                  <b>Ship Name : </b> {elm.name}
                </p>
                <p>
                  <b>Home Port : </b> {elm.home_port}
                </p>
                <p>
                  <b>Type of Ship : </b>
                  {elm.type}
                </p>
                <p>
                  <b>Status : </b> {elm.status ? "Active" : "Inactive"}
                </p>
                <p>
                  <b>Build Year : </b> {elm.year_built}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
