import { gql } from "@apollo/client"

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`

const GET_DATA = gql`
  query GetLocations {
    locations {
      name
      photo
    }
  }
`

export { GET_LOCATIONS, GET_DATA }
