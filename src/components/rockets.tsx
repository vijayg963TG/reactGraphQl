import React from "react"
import { useQuery } from "@apollo/client"
import { ROCKETS } from "../graphql/query"

export const Rockets = () => {
  const { loading, error, data } = useQuery(ROCKETS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  const { rockets } = data
  return (
    <>
      <h2>Rockets</h2>
      <div className="rockets">
        {rockets.map((elm: any) => (
          <div key={elm.first_flight} className="rocketCard">
            <p>
              <b>Active Status : </b> {elm.active ? "true" : "false"}
            </p>
            <p>
              <b>Company : </b>
              {elm.company}
            </p>
            <p>
              <b>Succes Rate : </b>
              {elm.success_rate_pct}
            </p>
            <p>
              <b>Cost Per Launch : </b>
              {elm.cost_per_launch}
            </p>
            <p>
              <b>Succes Rate : </b>
              {elm.success_rate_pct}
            </p>
            <p>
              <b>Description : </b>
              {elm.description}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
