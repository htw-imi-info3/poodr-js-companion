class Gear {
  constructor(chainring, cog, rim, tire) {
    this._chainring = chainring;
    this._cog = cog;
    // ADAPTATION: Using an object literal with a getter method in place of a
    // Ruby Struct
    this._wheel = {
      rim,
      tire,
      get diameter() {
        return this.rim + (this.tire * 2);
      },
    };
  }

  get chainring() { return this._chainring; }
  get cog() { return this._cog; }
  get wheel() { return this._wheel; }

  ratio() {
    return this.chainring / this.cog;
  }

  gear_inches() {
    return this.ratio() * this.wheel.diameter;
  }
}

console.log(`Gear gear_inches = ${new Gear(54, 11, 622, 20).gear_inches()}`);

