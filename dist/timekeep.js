"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timekeep = function Timekeep() {
  var _this = this;

  _classCallCheck(this, Timekeep);

  Object.observe(this.__timekeep__, function (changes) {
    // console.log("Changes: ", changes);
    console.log("now:", _this.__timekeep__.now);
  });
};

Timekeep.prototype.__timekeep__ = {};

Timekeep._running = false;
Timekeep._interval = null;

Timekeep.isRunning = function () {
  return this._running;
};

Timekeep.start = function () {
  var _this2 = this;

  if (this.isRunning()) {
    return;
  }
  this._running = true;
  this._interval = setInterval(function () {
    _this2.prototype.__timekeep__.now = new Date();
  }, 1000);
};

Timekeep.stop = function () {
  if (!this.isRunning()) {
    return;
  }
  clearInterval(this._interval);
  this._interval = null;
  this._running = false;
};

Timekeep.toggle = function () {
  if (this.isRunning()) {
    this.stop();
  } else {
    this.start();
  }
}

// export default Timekeep;
;