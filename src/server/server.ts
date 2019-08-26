import 'regenerator-runtime/runtime'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from 'graphql/typeDefs'
import resolvers from 'graphql/resolvers'
import { buildFederatedSchema } from '@apollo/federation'
import { sequelize as db } from 'db/sequelize'
;(async () => {
  await db.sync({ force: true })

  const server = new ApolloServer({
    schema: buildFederatedSchema([{ typeDefs, resolvers }]),
    context: { db },
  })

  const app = express()
  const port = process.env.port || 3000

  server.applyMiddleware({ app })

  app.listen(port, () =>
    console.log(`Typescript template app listening on port ${port}!`),
  )
})()
