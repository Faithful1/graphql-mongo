import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} from 'graphql';

import PostModel from '../../models/post';

export const postType = new GraphQLObjectType({
  name: 'Post',
  description: 'User api',
  fields: () => ({
  _id: {
    type: new GraphQLNonNull(GraphQLID)
  },
  uid: {
    type: GraphQLString
  },
  title: {
    type: GraphQLString
  },
  body: {
    type: GraphQLString
    }
  })
});

//create user input type which is useful for inserting post(graphql input)
export const postInputType = new GraphQLInputObjectType({
  name: 'PostInput',
  description: 'Insert post',
  fields: () => ({
    uid: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    body: {
      type: GraphQLString
    }
  })
});
