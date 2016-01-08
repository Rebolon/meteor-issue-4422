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