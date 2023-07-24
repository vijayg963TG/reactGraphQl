import { gql } from "@apollo/client"

const INSERTUSER = gql`
  mutation Insert_users($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {

    }
  }
`

export { INSERTUSER }
