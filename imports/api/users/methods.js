/**
 * Created by Robi on 4/25/2017.
 */
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

Meteor.methods({
    'user.signUp' (data) {
        Accounts.createUser({
            email: email,
            password: password
        });
    }
});
