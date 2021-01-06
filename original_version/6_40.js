// ...
class Bicycle {
  constructor(opts = {}) {
    this._size = opts.size;
    this._chain = opts.chain || this.default_chain();
    this._tire_size = opts.tire_size || this.default_tire_size();
  }

  get size() { return this._size; }
  get chain() { return this._chain; }
  get tire_size() { return this._tire_size; }

  spares() {
    return {
      tire_size: this.tire_size,
      chain: this.chain,
    };
  }

  default_chain() {
    return '11-speed';
  }

  default_tire_size() {
    throw new Error('Not implemented');
  }
}

class RoadBike extends Bicycle {
  constructor(opts = {}) {
    super(opts);
    this._tape_color = opts.tape_color;
  }

  get tape_color() { return this._tape_color; }

  spares() {
    return Object.assign({}, super.spares(), {
      tape_color: this.tape_color,
    });
  }

  default_tire_size() {
    return '23';
  }
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

  default_tire_size() {
    return '2.1';
  }
}

const road_bike = new RoadBike({
  size: 'M',
  tape_color: 'red',
});

console.log(road_bike.tire_size); // => 23
console.log(road_bike.chain); // => 11-speed

const mountain_bike = new MountainBike({
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox',
});

console.log(mountain_bike.tire_size); // => 2.1
console.log(mountain_bike.chain); // => 11-speed

class RecumbentBike extends Bicycle {
  constructor(opts = {}) {
    /*
     * ADAPTATION: JavaScript will not allow you to forget to send `super`, so
     * the error shown here will not be about tire_size not getting initialized,
     * as in the Ruby example.
     *
     * Instead this will result in a "ReferenceError: Must call super
     * constructor..."
     */
    this._flag = opts.flag; // forgot to send `super`
  }

  get flag() { return this._flag; }

  spares() {
    return Object.assign({}, super.spares(), {
      flag: this.flag,
    });
  }

  default_chain() {
    return '10-speed';
  }

  default_tire_size() {
    return '28';
  }
}

const bent = new RecumbentBike({
  flag: 'tall and orange',
});
// => ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//      at new RecumbentBike ...
console.log(bent.spares());

