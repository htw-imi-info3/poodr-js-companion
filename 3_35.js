class Wheel {
  constructor(rim, tire) {
    this._rim = rim;
    this._tire = tire;
  }

  get rim() { return this._rim; }
  get tire() { return this._tire; }

  diameter() {
    return this.rim + (this.tire * 2);
  }
}

/*
 * KEYWORD ARGS
 *     keyword arg with simple defaults
 *
 * NOTE: Here, we're combining destructuring with function defaults to
 * accomplish something similar to keyword args with default values.
 *
 * SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
class Gear {
  constructor({ chainring = 40, cog = 18, wheel }) {
    this._chainring = chainring;
    this._cog = cog;
    this._wheel = wheel;
  }

  get chainring() { return this._chainring; }
  get cog() { return this._cog; }
  get wheel() { return this._wheel; }
  // ...
  gear_inches() {
    return this.ratio() * this.wheel.diameter();
  }

  ratio() {
    return this.chainring / this.cog;
  }
}

console.log(new Gear({
  wheel: new Wheel(26, 1.5)
}).chainring);
// => 40;

/*
 * KEYWORD ARGS
 *     keyword arg with defaults
 *
 * NOTE: Sandi's point here is that the `constructor` executes in the new
 * instance of Gear, so it should be able to send messages to itself.
 */

class GearWithDefaultMethod {
  constructor({ 
    chainring = this.default_chainring(),
    cog = 18,
    wheel
  }) {
    this._chainring = chainring;
    this._cog = cog;
    this._wheel = wheel;
  }

  get chainring() { return this._chainring; }
  get cog() { return this._cog; }
  get wheel() { return this._wheel; }

  default_chainring() {
    return (100 / 2) - 10;
  }
  // ...
  gear_inches() {
    return this.ratio() * this.wheel.diameter();
  }

  ratio() {
    return this.chainring / this.cog;
  }
}

console.log(new GearWithDefaultMethod({
  wheel: new Wheel(26, 1.5)
}).chainring);
// => 40

console.log(new GearWithDefaultMethod({
  chainring: 52,
  wheel: new Wheel(26, 1.5)
}).chainring);
// => 52

