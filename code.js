if (Meteor.isClient) {
  printName = function () {
  	var name = Session.get('name');
  	console.log('Name: ', name);
  };

  computation = Deps.autorun(function(computation) {
  	printName();
  }); 

  doInvalidation = function () {
  	console.log('before computation invalidate');
  	computation.invalidate();
  	console.log('finished calling the invalidate method');
  };

  computation.onInvalidate(function () {
  	console.log('invalidate callback – happens AS SOON as .invalidate() is called.');
  });
}
