var greet = require(__dirname + '/lib/greet');

var hello = exports = module.exports = function() {
  var greeting = greet(process.argv[2] || 'world'); //argv is argument vector an array like structure
  console.log(greeting);
  return greeting;
};

hello();
