// Trip preparation becomes easier
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
      preparer.prepare_trip(this);
    });
  }
  // ...
}

// when every preparer is a Duck that responds to 'prepare_trip'
class Mechanic {
  prepare_trip(trip) {
    trip.bicycles.forEach((bicycle) => this.prepare_bicycle(bicycle));
  }

  // ...
  prepare_bicycles(bicycles) {
    bicycles.forEach((bicycle) => this.prepare_bicycle(bicycle));
  }

  prepare_bicycle(bicycle) {
    // ...
    console.log(`Mechanic prepare_bicycle ${bicycle}`);
  }
}

class TripCoordinator {
  prepare_trip(trip) {
    this.buy_food(trip.customers);
  }

  buy_food(customers) {
    // ...
    console.log('TripCoordinator buy_food');
  }
}

class Driver {
  prepare_trip(trip) {
    const vehicle = trip.vehicle;
    this.gas_up(vehicle);
    this.fill_water_tank(vehicle);
  }

  // ...
  gas_up(vehicle) {
    // ...
    console.log('Driver gas_up');
  }

  fill_water_tank(vehicle) {
    // ...
    console.log('Driver fill_water_tank');
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
