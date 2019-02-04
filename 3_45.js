// with keyword args
class Gear {
  constructor({ chainring, cog }) {
    this._chainring = chainring;
    this._cog = cog;
  }
  
  get chainring() { return this._chainring; }
  get cog() { return this._cog; }

  gear_inches(diameter) {
    return this.ratio() * diameter;
  }

  ratio() {
    return this.chainring / this.cog;
  }
}

class Wheel {
  constructor({ rim, tire, chainring, cog }) {
    this._rim = rim;
    this._tire = tire;
    this._gear = new Gear({ chainring, cog });
  }

  get rim() { return this._rim; }
  get tire() { return this._tire; }
  get gear() { return this._gear; }

  diameter() {
    return this.rim + (this.tire * 2);
  }

  gear_inches() {
    return this.gear.gear_inches(this.diameter());
  }
  //
}

console.log(new Wheel({
  rim: 26,
  tire: 1.5,
  chainring: 52,
  cog: 11
}).gear_inches());
// 137.0909090909091

