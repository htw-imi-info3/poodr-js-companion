class Gear {
  constructor(chainring, cog) {
    this._chainring = chainring;
    this._cog = cog;
  }

  ratio() {
    return this._chainring / this._cog; // <-- road to ruin
  }
}

console.log(`1st ratio = ${new Gear(54, 11).ratio()}`);

/*
 * ADAPTATION: JavaScript does not allow re-declaring Gear here, so an
 * alternative name is used to declare the contrasting example.
 *
 * ADAPTATION: Ruby's `attr_reader` is mimicked with JavaScript getter methods.
 */

class GearWithGetters {
  constructor(chainring, cog) {
    this._chainring = chainring;
    this._cog = cog;
  }

  get chainring() { // <-------
    return this._chainring;
  }

  get cog() { // <-------
    return this._cog;
  }

  ratio() {
    return this.chainring / this.cog; // <-------
  }
}

console.log(`2nd ratio = ${new GearWithGetters(54, 11).ratio()}`);

