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

  get chainring() { return this._chainring; } // <-------
  get cog() { return this._cog; } // <-------

  ratio() {
    return this.chainring / this.cog; // <-------
  }
}

console.log(`2nd ratio = ${new GearWithGetters(54, 11).ratio()}`);

/*
 * ADPTATION: Commented out, because these example alternatives are meant to
 * exist within a class declaration.
 *
 * // default-ish implementation via getter method
 * get cog() {
 *   return this._cog;
 * }
 *
 * // a simple reimplementation of cog
 * get cog() {
 *   return this._cog * unanticipated_adjustment_factor;
 * }
 *
 * // a more complex one
 * get cog() {
 *   return this._cog (foo ? bar_adjustment : baz_adjustment);
 * }
 *
 */

/*
 * ADAPTATION: The public/private example is intentionally left out of this
 * translation.
 *
 * While there are strategies for controlling the visibility of properties in
 * JavaScript objects, the concept is not supported with keywords as it is in
 * Ruby.
 *
 * For information about potential support for public and private class fields,
 * this V8/Chrome resource might be a good place to start:
 * https://developers.google.com/web/updates/2018/12/class-fields
 */

