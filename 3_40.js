/*
 * ADAPTATION: Without the equivalent of Ruby's "module" keyword, we'll just
 * define the Gear class here inside an object acting as a namespace.
 *
 * It looks a bit odd here, but you'll often see packages where the main file
 * exports an object with properties that are other objects/classes it intends
 * to make available. For example:
 *
 * ```
 * const Gear = require('./Gear');
 *
 * module.exports = {
 *   Gear,
 * };
 * ```
 */

// When Gear is part of some external interface
const SomeFramework = {
  Gear: class Gear {
    constructor(chainring, cog, wheel) {
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
};

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

// Wrap the interface to protect yourself from changes
class GearWrapper {
  static gear({ chainring, cog, wheel }) {
    return new SomeFramework.Gear(chainring, cog, wheel);
  }
}

// Now you can create a new Gear using keyword arguments
console.log(GearWrapper.gear({
  chainring: 52,
  cog: 11,
  wheel: new Wheel(26, 1.5)
}).gear_inches());
// => 137.0909090909091

