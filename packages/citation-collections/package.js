Package.describe({
  name: 'rebolon:citation-collections',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Collection for the app',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'underscore']);
  api.addFiles('collections.js');
  api.export(['Citations']);
});
