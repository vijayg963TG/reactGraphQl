import { gql } from "@apollo/client"

const COMPANY = gql`
  query Company {
    company {
      ceo
      coo
      cto
    }
  }
`

const ROCKETS = gql`
  query Rockets {
    rockets {
      boosters
      active
      company
      cost_per_launch
      country
      description
      first_flight
      mass {
        kg
      }
      success_rate_pct
    }
  }
`

const SHIPS = gql`
  query Ships {
    ships {
      active
      abs
      attempted_landings
      class
      course_deg
      home_port
      id
      image
      imo
      missions {
        flight
        name
      }
      model
      mmsi
      name
      position {
        latitude
        longitude
      }
      roles
      speed_kn
      status
      successful_landings
      type
      url
      weight_kg
      weight_lbs
      year_built
    }
  }
`

export { COMPANY, ROCKETS, SHIPS }
