class ObscuringReferences {
  constructor(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  diameters() {
    // 0 is rim, 1 is tire
    this.data.collect // TODO: equivalent is fold?
    return this.data.map((cell) => {
      return cell[0] + (cell[1] * 2);
    });
  }
  // ... many other methods that index into the array
}

// rim and tire sizes (now in millimeters!) in a 2d array
const data = [[622, 20], [622, 23], [559, 30], [559, 40]]

class RevealingReferences {
  constructor(data) {
    this._wheels = this.wheelify(data);
  }

  get wheels() {
    return this._wheels;
  }

  diameters() {
    return this.wheels.map((wheel) => {
      return wheel.rim + (wheel.tire * 2);
    });
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

console.log(`ObscuringReferences diameters = ${new ObscuringReferences(data).diameters()}`);
console.log(`RevealingReferences diameters = ${new RevealingReferences(data).diameters()}`);
