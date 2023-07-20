import React from "react"
import { useQuery, gql } from "@apollo/client"
import { GET_LOCATIONS } from "../graphql/query"
import { Link } from "react-router-dom"

interface locationProps {
  id: number | string
  name: string
  description: string
  photo: any | null
}

export const Home = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  return <>
  <Link to={"/dogs"} >Dogs Page</Link>
{  data.locations.map(({ id, name, description, photo }:locationProps) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ))}
  </>
}
