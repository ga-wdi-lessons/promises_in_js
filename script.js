//the argument variable 'callback' is a *reference* to a function. it is then // invoked at the end of someFunction
function someFunction(callback) {
  let someValue = 14;
  callback(someValue);
}

someFunction( value => {
  console.log(`${value} was passed in as an arg to callback`);
})
