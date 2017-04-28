/**
 * Created by Robi on 4/25/2017.
 */
import { createRouter } from 'meteor/cultofcoders:meteor-react-routing';
import App from '/imports/ui/App.jsx';
import '/imports/startup/accounts-config.js';

export default createRouter(App);