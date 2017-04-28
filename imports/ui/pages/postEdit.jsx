import React, {Button, Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Posts from '/imports/api/posts/collection.js'
import route from '/imports/routing/router.js';
import Formsy from 'formsy-react';
import Input from '../lib/Input'
import {Meteor} from 'meteor/meteor';

export default class PostEdit extends Component {
    constructor() {
        super();
        this.state = {loading: true, post: null}
    }

    componentDidMount() {
        Meteor.call('post.find', route.current().params.id, (err, res) => {
            this.setState({
                loading: false,
                post: res
            })
        })
    }

    editPost (data) {
        Meteor.call('post.edit', this.state.post._id, data, (err, result) => {
            if(!err) {
                alert('post modified!');
            }
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <div>
                    <Formsy.Form onValidSubmit={this.editPost().bind(this)}>
                        <Input type="text" name="name" placeholder="post" value={this.state.post.name}/>
                        <button type="submit" className="btn btn-default">Edit</button>
                    </Formsy.Form>
                    <a href="/posts">Back to list</a>
                </div>
            );
        }
    }
}