if (Meteor.isClient) {
  Name = {
  	_dep: new Deps.Dependency,

  	_value: null,

  	get: function (){
  		return this._value;
  	},

  	set: function(value){
  		this._value = value;
  	}
  };

  printName = function(){
  	var name = Name.get();
  	console.log('name: ', name);
  };

  Deps.autorun(function (){
  	printName();
  });
}
