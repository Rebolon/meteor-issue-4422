/*
// Foolowing recommandations from
//  http://stackoverflow.com/questions/28889748/how-to-prevent-a-meteor-cordova-app-from-connecting-to-10-0-2-2-and-why-does-t
//  http://stackoverflow.com/questions/28948742/how-to-prevent-load-of-meteor-local-when-building-ios-app-with-phonegap
Meteor.startup(() => {
  let server_url = "http://localhost:3006";

  Meteor.absoluteUrl.defaultOptions.rootUrl = server_url;

  if (Meteor.isServer) {
    process.env.ROOT_URL = server_url;
    process.env.DDP_URL = server_url;
    process.env.DDP_DEFAULT_CONNECTION_URL = server_url;
    process.env.MOBILE_ROOT_URL = server_url;
    process.env.MOBILE_DDP_URL = server_url;
  }
});
*/