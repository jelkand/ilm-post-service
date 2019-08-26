import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    posts(userId: ID!): [Post]
    post(id: ID!): Post
  }

  extend type Mutation {
    createPost(id: ID, body: String!): Post
    updatePost(id: ID!, body: String!): Post
    deletePost(id: ID!): Post
  }

  type Post @key(fields: "id") {
    id: ID!
    user: User! @external
    userId: String!
    body: String!
    createdAt: String!
    updatedAt: String!
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    posts: [Post]!
  }
`
