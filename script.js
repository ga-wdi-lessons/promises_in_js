//someValue doesn't need to be defined within someFunction, it could be passed
//in as an argument to someFunction
function someFunction(someValue, callback) {
  callback(someValue);
}

someFunction( 14, value => {
  console.log(`${value} was passed in as an arg to callback`);
})
