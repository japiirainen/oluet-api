import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { applyMiddleware } from 'graphql-middleware'
import schema from './schema'
import { PORT } from './utils/constants'
import { createContext } from './utils/context'

const start = async (): Promise<void> => {
   const app = express()

   const server = new ApolloServer({
      schema: applyMiddleware(schema),
      context: createContext,
      introspection: true,
      playground: true,
   })

   server.applyMiddleware({
      app,
      cors: false,
   })

   app.listen({ port: PORT }, () =>
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
   )
}

start()
