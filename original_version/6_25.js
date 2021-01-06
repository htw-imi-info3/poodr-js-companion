class Bicycle {
  constructor(opts = {}) {
    this._size = opts.size; // <- promoted from RoadBike
  }

  get size() { return this._size; } // <- promoted from RoadBike
}

class RoadBike extends Bicycle {
  constructor(opts = {}) {
    super(opts);
    this._tape_color = opts.tape_color;
  }

  get tape_color() { return this._tape_color; }

  spares() {
    return {
      chain: '11-speed',
      tire_size: '23',
      tape_color: this.tape_color,
    };
  }
  // ...
}

class MountainBike extends Bicycle {
  constructor(opts = {}) {
    super(opts);
    this._front_shock = opts.front_shock;
    this._rear_shock = opts.rear_shock;
  }

  get front_shock() { return this._front_shock; }
  get rear_shock() { return this._rear_shock; }

  spares() {
    return Object.assign({}, super.spares(), {
      front_shock: this.front_shock,
    });
  }
}

const road_bike = new RoadBike({
  size: 'M',
  tape_color: 'red',
});

const mountain_bike = new MountainBike({
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox',
});

console.log(road_bike.size);
// => M

console.log(mountain_bike.size);
// => S

console.log(road_bike.spares());
// => { chain: '11-speed', tire_size: '23', tape_color: 'red' }

console.log(mountain_bike.spares());
// => TypeError: (intermediate value).spares is not a function
//      at MountainBike.spares ...

