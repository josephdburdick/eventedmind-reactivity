if (Meteor.isClient) {
  add = function (firstCell, secondCell){
    var a = Session.get(firstCell) || 0;
    var b = Session.get(secondCell) || 0;
    return a + b;
  }

  var result = add('a','b');
  console.log('result: ', result);
}
