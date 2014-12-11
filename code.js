if (Meteor.isClient) {
  printName = function () {
  	var name = Session.get('name');
  	console.log('Name: ', name);
  };

  Deps.autorun(function () {
  	printName();
  });

  setName = function (name) {
  	Session.set('name', name);
  	console.log('set name to: ', name);
  };
}
