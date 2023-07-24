import { useQuery } from "@apollo/client"
import { COMPANY } from "../graphql/query"
import { Link } from "react-router-dom"
import { Rockets } from "../components/rockets"
import "../stylesheet/home.css"
import { Users } from "../components/users"

export const Home = () => {
  const { loading, error, data } = useQuery(COMPANY)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  const { ceo, coo, cto } = data.company
  return (
    <div className="container">
      <button>
        <Link to={"/capsules"}>Go To Ships</Link>
      </button>
      {data && (
        <div>
          <h3>Campany Info : </h3>
          <p>
            <b>CEO :</b> {ceo}
          </p>
          <p>
            <b>COO :</b> {coo}
          </p>
          <p>
            <b>CTO :</b> {cto}
          </p>
        </div>
      )}
      <hr />
      <Users />
      <hr />
      <Rockets />
    </div>
  )
}
