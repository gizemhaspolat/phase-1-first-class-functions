function receivesAFunction(functionReceived) {
  functionReceived();
}

function returnsANamedFunction() {
  function namedFunction() {}

  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {};
}
