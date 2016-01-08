Meteor.methods({
  'isClientOrServer': function() {
    Meteor._sleepForMs(1000);

    let data = {
      isServer: Meteor.isServer,
      isClient: Meteor.isClient,
      isCordova: Meteor.isCordova,
      rootUrl: process.env.ROOT_URL,
      ddpUrl: process.env.ROOT_URL,
      ddpDefaultConnectionUrl: process.env.DDP_DEFAULT_CONNECTION_URL,
      mobileRootUrl: process.env.MOBILE_ROOT_URL,
      mobileDdpUrl: process.env.MOBILE_DDP_URL
    };

    console.info(data);

    return data;
  }
});