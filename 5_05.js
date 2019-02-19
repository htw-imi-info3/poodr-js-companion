class Trip {
  constructor(bicycles, customers, vehicle) {
    this._bicycles = bicycles;
    this._customers = customers;
    this._vehicle = vehicle;
  }

  get bicycles() { return this._bicycles; }
  get customers() { return this._customers; }
  get vehicle() { return this._vehicle; }

  // this 'mechanic' argument could be of any class
  prepare(mechanic) {
    mechanic.prepare_bicycles(this.bicycles);
  }
}

// if you happen to pass an instance of *this* class, it works
class Mechanic {
  prepare_bicycles(bicycles) {
    bicycles.forEach((bicycle) => this.prepare_bicycle(bicycle));
  }

  prepare_bicycle(bicycle) {
    // ...
  }
}

class Bicycle {}
class Customer {}
class Vehicle {}

new Trip(
  [new Bicycle(), new Bicycle(), new Bicycle()],
  [new Customer(), new Customer()],
  new Vehicle()
).prepare(new Mechanic());

