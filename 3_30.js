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

/**
 * Using fixed args
 */

class GearUsingFixedArgs {
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

console.log(new GearUsingFixedArgs(
  52,
  11,
  new Wheel(26, 1.5)
).gear_inches());
// => 137.0909090909091

/*
 * Using "hash"
 *
 * NOTE: In JavaScript, this might more commonly be referred to as using an
 * object parameter. The idea is to make the caller explicitly name the
 * parameters when they call the method.
 */

class GearUsingHash {
  constructor(args) {
    this._chainring = args['chainring']; // NOTE: could instead be `args.chainring`
    this._cog       = args['cog'];
    this._wheel     = args['wheel'];
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

console.log(new GearUsingHash({
  chainring: 52,
  cog: 11,
  wheel: new Wheel(26, 1.5)
}).gear_inches());
// => 137.0909090909091

/*
 * Using "keyword args"
 *
 * NOTE: Here, we're using destructuring on the constructor's parameters to
 * achieve something similar to the Ruby keyword argument example.
 *
 * SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

class GearUsingKeywordArgs {
  constructor({ chainring, cog, wheel }) {
    this._chainring = chainring
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

console.log(new GearUsingKeywordArgs({
  cog: 11,
  chainring: 52,
  wheel: new Wheel(26, 1.5)
}).gear_inches());
// => 137.0909090909091

console.log(new GearUsingKeywordArgs({
  wheel: new Wheel(26, 1.5),
  chainring: 52,
  cog: 11
}).gear_inches());
// => 137.0909090909091

