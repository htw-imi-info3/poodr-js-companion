class RevealingReferences {
  constructor(data) {
    this._wheels = this.wheelify(data);
  }

  get wheels() {
    return this._wheels;
  }

  // first - iterate over the array
  diameters() {
    return this.wheels.map((wheel) => this.diameter(wheel));
  }

  // second - calculate diameter of ONE wheel
  diameter(wheel) {
    return wheel.rim + (wheel.tire * 2);
  }

  wheelify(data) {
    return data.map((cell) => {
      // ADAPTATION: Using an object literal in place of a Ruby Struct
      // now everyone can send rim/tire to the wheel object literal
      return {
        rim: cell[0],
        tire: cell[1],
      };
    });
  }
}

const data = [[622, 20], [622, 23], [559, 30], [559, 40]];
console.log(`RevealingReferences diameters = ${new RevealingReferences(data).diameters()}`);

// gear_inches does too much
class Gear {
  constructor(chainring, cog, rim, tire) {
    this._chainring = chainring;
    this._cog = cog;
    this._rim = rim;
    this._tire = tire;
  }

  get chainring() { return this._chainring; }
  get cog() { return this._cog; }
  get rim() { return this._rim; }
  get tire() { return this._tire; }

  ratio() {
    return this.chainring / this.cog;
  }

  gear_inches() {
    // tire goes around rim twice for diameter
    return this.ratio() * (this.rim + (this.tire * 2));
  }
}

console.log(`2nd Gear gear_inches = ${new Gear(54, 11, 622, 20).gear_inches()}`);
