import { gql } from 'apollo-server-express'

export default gql`
   type Beer {
      hinta: Int!
   }
   type Query {
      beer: Beer!
   }
`
