class Gear {
  constructor(chainring, cog, wheel = null) {
    this._chainring = chainring;
    this._cog = cog;
    this._wheel = wheel;
  }

  get chainring() { return this._chainring; }
  get cog() { return this._cog; }
  get wheel() { return this._wheel; }

  ratio() {
    return this.chainring / this.cog;
  }

  gear_inches() {
    return this.ratio() * this.wheel.diameter();
  }
}

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

  circumference() {
    return this.diameter() * Math.PI;
  }
}

const wheel = new Wheel(26, 1.5);
console.log(wheel.circumference());
// => 91.106186954104

console.log(new Gear(52, 11, wheel).gear_inches());
// => 137.0909090909091

console.log(new Gear(52, 11).ratio());
// => 4.7272727272727275

