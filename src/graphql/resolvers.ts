import 'regenerator-runtime/runtime'
import {
  IQueryResolvers,
  IMutationResolvers,
  IPostResolvers,
} from 'typings/graphql'
import { Post as dbPost } from 'db/models/Post'

const Query: IQueryResolvers = {
  posts: async (obj, { userId }, context, info) =>
    dbPost.findAll({ where: { userId } }),
  post: async (obj, { id }, context, info) => dbPost.findByPk(id),
}
const Mutation: IMutationResolvers = {
  createPost: async (obj, { body }, context, info) => dbPost.create({ body }),
  updatePost: async (obj, { id, body }, context, info) =>
    dbPost.update({ body }, { where: { id } }),
  deletePost: async (obj, { id }, context, info) =>
    dbPost.destroy({ where: { id } }),
}
const Post: IPostResolvers = {}

export default {
  Query,
  Mutation,
  Post,
}
