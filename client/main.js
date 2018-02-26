import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import './../imports/startup/simple-schema-configuration.js';

import { routes, onAuthChangeRedirect} from './../imports/routes/routes';

Tracker.autorun(() => {
  onAuthChangeRedirect();
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
