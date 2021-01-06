// 6_15.js
class Bicycle {
  constructor(opts = {}) {
    this._size = opts.size;
    this._tape_color = opts.tape_color;
  }

  get size() { return this._size; }
  get tape_color() { return this._tape_color; }

  // every bike has the same defaults for tire and chain size
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
    /*
     * ADAPTATION: Using Object.assign here to merge two objects into a new
     * object.
     */
    return Object.assign({}, super.spares(), {
      front_shock: this.front_shock,
    });
  }
}

const mountain_bike = new MountainBike({
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox',
});

console.log(mountain_bike.size);
// => S

console.log(mountain_bike.spares());
// => { chain: '11-speed', tire_size: '23', tape_color: undefined, front_shock: 'Manitou' }
// This should be a copy of out2, duplicated because I want to spread it out and comment on it.
// => {
//   chain: '11-speed',
//   tire_size: '23',       <- wrong!
//   tape_color: undefined, <- not applicable!
//   front_shock: 'Manitou'
// }
