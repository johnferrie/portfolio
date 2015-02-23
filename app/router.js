import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('sites', { path: '/' }, function() {
    this.route('show', { path: ':site_id' });
  });
});

export default Router;
