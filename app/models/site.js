import DS from 'ember-data';

var Site = DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string')
});

Site.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'Site Name 1',
            url: 'http://www.google.com'
        },
        {
            id: 2,
            name: 'Site Name 2',
            url: 'http://www.google.com'
        },
        {
            id: 3,
            name: 'Site Name 3',
            url: 'http://www.google.com'
        },
        {
            id: 4,
            name: 'Site Name 4',
            url: 'http://www.google.com'
        }
    ]
});

export default Site;
