import 'regenerator-runtime/runtime'
import {
  IQueryResolvers,
  IMutationResolvers,
  IPostResolvers,
} from 'typings/graphql'
import { Post } from 'db/models/Post'

// export const initializeResolvers = () => {
const Query: IQueryResolvers = {
  posts: async (obj, { userId }, context, info) =>
    Post.findAll({ where: { userId } }),
  post: async (obj, { id }, context, info) => Post.findByPk(id),
}
const Mutation: IMutationResolvers = {
  createPost: async (obj, { body }, { db }, info) => {
    const post = new Post({ body })
    await post.save()
    await post.reload()
    console.log(await Post.findAndCountAll())
    console.log(post, typeof post)
    return { id: post.get('id') }
  },
  updatePost: async (obj, { id, body }, context, info) =>
    Post.update({ body }, { where: { id } }),
  deletePost: async (obj, { id }, context, info) =>
    Post.destroy({ where: { id } }),
}
const PostResolver: IPostResolvers = {}

export default {
  Query,
  Mutation,
  Post: PostResolver,
}
// }
