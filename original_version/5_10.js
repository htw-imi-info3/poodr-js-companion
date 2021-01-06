// Trip preparation becomes more complicated
class Trip {
  constructor(bicycles, customers, vehicle) {
    this._bicycles = bicycles;
    this._customers = customers;
    this._vehicle = vehicle;
  }

  get bicycles() { return this._bicycles; }
  get customers() { return this._customers; }
  get vehicle() { return this._vehicle; }

  prepare(preparers) {
    preparers.forEach((preparer) => {
      switch (preparer.constructor) {
        case Mechanic:
          preparer.prepare_bicycles(this.bicycles);
          break;
        case TripCoordinator:
          preparer.buy_food(this.customers);
          break;
        case Driver:
          preparer.gas_up(this.vehicle);
          preparer.fill_water_tank(this.vehicle);
          break;
      }
    });
  }
}

// when you introduce TripCoordinator and Driver
class TripCoordinator {
  buy_food(customers) {
    // ...
    console.log('TripCoordinator buy_food');
  }
}

class Driver {
  gas_up(vehicle) {
    // ...
    console.log('Driver gas_up');
  }

  fill_water_tank(vehicle) {
    // ...
    console.log('Driver fill_water_tank');
  }
}

class Mechanic {
  prepare_bicycles(bicycles) {
    bicycles.forEach((bicycle) => this.prepare_bicycle(bicycle));
  }

  prepare_bicycle(bicycle) {
    // ...
    console.log(`Mechanic prepare_bicycle ${bicycle}`);
  }
}

class Bicycle {}
class Customer {}
class Vehicle {}

const trip = new Trip(
  [new Bicycle(), new Bicycle(), new Bicycle()],
  [new Customer(), new Customer()],
  new Vehicle(),
);

const preparers = [
  new TripCoordinator(),
  new Driver(),
  new Mechanic(),
];

trip.prepare(preparers);

