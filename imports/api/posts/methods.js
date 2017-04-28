/**
 * Created by Robi on 4/25/2017.
 */
import {Meteor} from 'meteor/meteor';
import Posts from '/imports/api/posts/collection';

Meteor.methods({
    'create_a_standard_post': function () {
        return Posts.insert({type: 'standard'})
    },

    'create_a_post': function (type) {
        return Posts.insert({type: type});
    },

    'post.find': function (id) {
        return Posts.findOne({_id: id});
    },

    'post.remove': function () {
        if (!this.userId()) {
            throw new Meteor.Error('not-authorized');
        }
            return Posts.remove({_id: id});
    },
    'posts.list': function () {
        return Posts.find().fetch();
    },

    'post.add': function(data) {
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');}
        Posts.insert(data);
    },
    'post.edit': function(id, data) {
        if (!this.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        Posts.update(id, {
            $set: {
                name: data.name
            }
        });
    }
});