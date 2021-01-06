/*
 * ADAPTATION: Including actual classes here to clarify that the examples show
 * methods -- they reference instances variables.
 */

class Gear {
  gear_inches() {
    return this.ratio() * this.wheel.diameter();
  }
}

class ComplexGear {
  gear_inches() {
    // ... a few lines of scary math
    let foo = some_intermediate_result * this.wheel.diameter();
    // ... more lines of scary math
  }
}

class ComplexGearWithEncapsulatedDiameter {
  gear_inches() {
    // ... a few lines of scary math
    let foo = some_intermediate_result * this.diameter();
    // ... more lines of scary math
  }

  diameter() {
    return this.wheel.diameter();
  }
}

