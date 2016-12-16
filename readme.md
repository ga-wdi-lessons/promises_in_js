## Promises

Promises are a concept that rely on a unique kind of object in javascript called the **promise object**. This is an object that captures an **eventual** value. It has a space reserved for a certain value. In sense, it 'awaits' the arrival of that value.

Promises and callbacks are techniques that allows javascript code to run synchronously.

### Callbacks

```js
//the argument variable 'callback' is a *reference* to a function. it is then // invoked at the end of someFunction
function someFunction(callback) {
  let someValue = 14;
  callback(someValue);
}

someFunction( value => {
   console.log(`${value} was passed in as an arg to callback`);
 })
```

### Callback with additional argument

```js
//someValue doesn't need to be defined within someFunction, it could be passed
//in as an argument to someFunction
function someFunction(someValue, callback) {
  callback(someValue);
}

someFunction( 14, value => {
   console.log(`${value} was passed in as an arg to callback`);
})
```

### and .then()

```js
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
```

## Promise Objects

```js
class Promise {
  constructor(fnxn){
    this.state = 'pending';
    this.value = null;
    this.deferred = null;
    fnxn(this.resolve)
  }

  resolve(newValue) {
    this.value = newValue;
    this.state = 'resolved';
    if(this.deferred) {
      this.handle(this.deferred);
    }
  }

  handle(onResolved) {
    if(this.state === 'pending') {
      this.deferred = onResolved;
      return;
    }
    onResolved(this.value);
  }

  then(onResolved) {
    this.handle(onResolved);
  }

}
```

### Promises have state

### then & resolve

## Chaining Promises

### Returning a promise object
