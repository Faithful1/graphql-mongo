import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import { userType } from '../../types';
import userModel from '../../models/user';

export default {
  type: userType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params){
    return UserModel.findByid(params).exec();
  }
}