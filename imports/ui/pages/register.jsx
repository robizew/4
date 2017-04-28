import React, {Button, Component, PropTypes} from 'react';
import Formsy from 'formsy-react';
import Input from '../lib/Input'
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import ReactDOM from 'react-dom';



export default class Register extends Component {
    componentDidMount() {
        // Use Meteor Blaze to render login buttons
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }
    componentWillUnmount() {
        // Clean up Blaze view
        Blaze.remove(this.view);
    }
    render() {
        // Just render a placeholder container that will be filled in
        return <span ref="container" />;
    }
}

