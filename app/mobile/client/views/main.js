Template.main.onCreated(function() {
  this.subscribe('oneCitation');
  this.infos = new ReactiveVar();

  let text = "",
      self = this;

  let promise = new Promise( (resolve, reject) => {
    Meteor.call("isClientOrServer", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  promise
    .then( result => {
      if (typeof result != "object") throw new Meteor.Error("methods isClientOrServer return wrong data");

      for( let key in result) {
        text += `${key}: ${result[key]}
`;
      }

      console.log("method response", text);
      self.infos.set(text);
      console.info("method response in reactiveVar", self.infos.get());
    })
    .catch( error => {
      console.error(error);
    });
});

Template.main.helpers({
  "oneCite": () => {
    let oneCitation = Citations.findOne();

    return oneCitation;
  },
  "getMeteorInfos": () => {
    return Template.instance().infos.get();
  }
});