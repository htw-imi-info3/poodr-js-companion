class Mechanic {
  // prepare_trip(trip) {
  //   trip.bicycles.forEach((bicycle) => this.prepare_bicycle(bicycle));
  // }
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
  // prepare_trip(trip) {
  //   this.buy_food(trip.customers);
  // }
  // ...

  buy_food(customers) {
    // ...
    console.log('TripCoordinator buy_food');
  }
}

class Driver {
  // prepare_trip(trip) {
  //   const vehicle = trip.vehicle;
  //   this.gas_up(vehicle);
  //   this.fill_water_tank(vehicle);
  // }
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

/*************************
 * Initial example
 *************************/
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

console.log('\nInitial example:');
let trip = new Trip(
  [new Bicycle(), new Bicycle(), new Bicycle()],
  [new Customer(), new Customer()],
  new Vehicle(),
);

let preparers = [
  new TripCoordinator(),
  new Driver(),
  new Mechanic(),
];

trip.prepare(preparers);

/*************************
 * instanceof example
 * ADAPTATION: instanceof used in place of Ruby's "kind_of?"
 *************************/
class TripUsingInstanceOf {
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
      if (preparer instanceof Mechanic) {
        preparer.prepare_bicycles(this.bicycles);
      } else if (preparer instanceof TripCoordinator) {
        preparer.buy_food(this.customers);
      } else if (preparer instanceof Driver) {
        preparer.gas_up(this.vehicle);
        preparer.fill_water_tank(this.vehicle);
      }
    });
  }
}

console.log('\ninstanceof example:');
// NOTE: defined above, reassigned here...
trip = new TripUsingInstanceOf(
  [new Bicycle(), new Bicycle(), new Bicycle()],
  [new Customer(), new Customer()],
  new Vehicle(),
);

preparers = [
  new TripCoordinator(),
  new Driver(),
  new Mechanic(),
];

trip.prepare(preparers);

/*************************
 * 'in' operator example
 *
 * ADAPTATION: There are multiple ways to check if an object responds to a
 * particular message. Commonly, you'll see code checking to see that a property
 * is defined on an object by calling it in an if condition, or using Object's
 * 'hasOwnProperty' method. 
 * This example uses the 'in' operator, because it checks for the existence of
 * the property anywhere in the object's prototype chain -- which seems most
 * similar to the example using Ruby's 'responds_to?' ... just be aware this
 * isn't a great translation.
 *
 * SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
 * SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#Description
 *************************/

class TripUsingInOperator {
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
      if ('prepare_bicycles' in preparer) {
        preparer.prepare_bicycles(this.bicycles);
      } else if ('buy_food' in preparer) {
        preparer.buy_food(this.customers);
      } else if ('gas_up' in preparer) {
        preparer.gas_up(this.vehicle);
        preparer.fill_water_tank(this.vehicle);
      }
    });
  }
}

console.log('\nin operator example:');
trip = new TripUsingInOperator(
  [new Bicycle(), new Bicycle(), new Bicycle()],
  [new Customer(), new Customer()],
  new Vehicle(),
);

preparers = [
  new TripCoordinator(),
  new Driver(),
  new Mechanic(),
];

trip.prepare(preparers);
