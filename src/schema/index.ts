import { makeExecutableSchema } from 'apollo-server-express'
import { resolvers } from './resolvers'
import beer from './typeDefs/beer'

const typeDefs = [beer]

export default makeExecutableSchema({ typeDefs, resolvers })
