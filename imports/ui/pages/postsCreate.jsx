import React, {Button, Component, PropTypes} from 'react';
import Formsy from 'formsy-react';
import Input from '../lib/Input'


export default class PostsCreate extends Component {
    constructor() {
        super();
    }

    addPost(data) {
        Meteor.call('post.add', data, (err, result) => {
            if(!err) {
                alert('post added!');
            }
        });
    }

    render() {
        return (
            <div>
                <Formsy.Form onValidSubmit={this.addPost.bind(this)}>
                    <Input type="text" name="name" placeholder="" value=""/>
                    <button type="submit" className="btn btn-default">Add post</button>
                </Formsy.Form>
                <a href="/posts">posts</a>
            </div>
        );
    }
}