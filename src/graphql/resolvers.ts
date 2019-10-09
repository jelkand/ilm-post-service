import {
  IQueryResolvers,
  IMutationResolvers,
  IPostResolvers,
} from '../typings/graphql'
import { Post } from '../db/models/Post/Post'

const Query: IQueryResolvers = {
  posts: async (obj, { userId }, context, info) =>
    Post.findAll({ where: { userId } }),
  post: (obj, { id }, context, info) => Post.findByPk(id),
}
const Mutation: IMutationResolvers = {
  createPost: (obj, { id, userId, body }, { db }, info) =>
    Post.create({ id, userId, body }),
  updatePost: (obj, { id, body }, context, info) =>
    Post.update({ body }, { where: { id } }),
  deletePost: (obj, { id }, context, info) => Post.destroy({ where: { id } }),
}
const PostResolver: IPostResolvers = {
  __resolveReference: ({ id }: { id: string }) => Post.findByPk(id),
}

export default {
  Query,
  Mutation,
  Post: PostResolver,
}
