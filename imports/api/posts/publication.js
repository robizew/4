/**
 * Created by Robi on 4/25/2017.
 */
import { Meteor } from 'meteor/meteor';
import Posts from '/imports/api/posts/collection';

Meteor.publish('posts', function () {
    return Posts.find();
});