/**
 * Created by Robi on 4/25/2017.
 */
import {Mongo} from 'meteor/mongo';
const Posts = new Mongo.Collection('posts');
export default Posts;