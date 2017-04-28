/**
 * Created by Robi on 4/25/2017.
 */
import React, {Button, Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Home extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <a href="/register">Register/Login</a> <br/>
                <a href="/posts">posts</a> <br/>
            </div>
        );
    }
}