class Timekeep {
  constructor() {
    Object.observe(this.__timekeep__, (changes) => {
      // console.log("Changes: ", changes);
      console.log("now:", this.__timekeep__.now);
    });
  }
}

Timekeep.prototype.__timekeep__ = {};

Timekeep._running = false;
Timekeep._interval = null;

Timekeep.isRunning  = function() {
  return this._running;
}

Timekeep.start = function() {
  if (this.isRunning()) {
    return;
  }
  this._running = true;
  this._interval = setInterval(() => {
    this.prototype.__timekeep__.now = new Date();
  }, 1000);
}

Timekeep.stop = function() {
  if (!this.isRunning()) {
    return;
  }
  clearInterval(this._interval);
  this._interval = null;
  this._running = false;
}

Timekeep.toggle = function() {
  if (this.isRunning()) {
    this.stop();
  } else {
    this.start();
  }
}

// export default Timekeep;
