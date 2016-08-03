const module = (function () {
  const privateMethods = {
    i: 5,
    get() {
      console.log(`current value: ${this.i}`);
    },
    set(val) {
      this.i = val;
    },
    run() {
      console.log('running');
    },
    jump() {
      console.log('jumping');
    },
  };

  return {

    facade(args) {
      privateMethods.set(args.val);
      privateMethods.get();

      if (args.run) {
        privateMethods.run();
      }
    },
  };
}());


// Outputs: "current value: 10" and "running"
module.facade({ run: true, val: 10 });
