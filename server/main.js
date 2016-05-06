import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  let myRegEx = new RegExp(/^className[0-9]{1,2}$/, 'ig');
});
