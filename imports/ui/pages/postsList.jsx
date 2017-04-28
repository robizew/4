import React, {Button, Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Posts from '/imports/api/posts/collection.js'
import {Meteor} from 'meteor/meteor';

class PostsList extends React.Component {
    constructor() {
        super();
    }

    removePost() {
        Meteor.call('post.remove', id);
    }

    render() {
        const {loading, posts} = this.props;
        if (loading) {
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <div>
                    {
                        posts.map((post) => {
                            return (
                                <div key={post._id }>
                                    <div> {post.name}</div>
                                    <span> </span>
                                    <a href={"/post/edit/" + post._id}>Edit</a>
                                    <button onClick={this.removePost.bind(this, post._id)}>Remove</button>
                                </div>
                            )
                        })
                    }
                    <a href="/posts/create">Create a post</a>
                </div>
            )
        }
    }
}

export default createContainer(() => {
    const handle = Meteor.subscribe('posts');
    // reactive data sources will get tracked here
    // any change will result into a re-render of "Home" component

    return {
        loading: !handle.ready(),
        posts: Posts.find().fetch()
    }
}, PostsList)