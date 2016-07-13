const myRevealingModule = (function () {
  let privateCounter = 0;

  function privateFunction() {
    privateCounter++;
  }

  function publicIncrement() {
    privateFunction();
  }

  function publicFunction() {
    publicIncrement();
  }

  function publicGetCount() {
    return privateCounter;
  }

  // Reveal public pointers to
  // private functions and properties
  return {
    start: publicFunction,
    increment: publicIncrement,
    count: publicGetCount,
  };
}());

myRevealingModule.start();
