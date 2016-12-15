//we could also return an object containing a function-expression defining a method named 'then'
function someFunction(value) {
  return {
    then: callback => {
      return callback(value);
    }
  };
}

//and invoke it in the following way:
someFunction(14).then(value => {
  console.log(`${value} was passed in as an arg to callback`);
})
