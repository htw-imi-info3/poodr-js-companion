class Bicycle {
  // This class is empty except for initialize.
  // Code has been moved to RoadBike.
  constructor(opts = {}) {}
}

class RoadBike extends Bicycle {
  // Now a subclass of Bicycle.
  // Contains all code from the old Bicycle class.
  constructor(opts = {}) {
    // NOTE: Calling super here, because JavaScript requires it before using 'this'
    super(opts);
    this._size = opts.size;
    this._tape_color = opts.tape_color;
  }

  get size() { return this._size; }
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
  // Still a subclass of Bicycle.
  // Code has not changed.
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

console.log(road_bike.size);
// => M

const mountain_bike = new MountainBike({
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox',
});

console.log(mountain_bike.size);
// => undefined

