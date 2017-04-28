/**
 * Created by Robi on 4/25/2017.
 */
import { Meteor } from 'meteor/meteor';
import UserSchema from './schema';

const Users = Meteor.users;

Users.attachSchema(UserSchema);

export default Users;
