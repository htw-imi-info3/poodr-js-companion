class Bicycle {
  constructor(opts = {}) {
    this._size = opts.size;
    this._chain = opts.chain || this.default_chain();
    this._tire_size = opts.tire_size || this.default_tire_size();
  }

  get size() { return this._size; }
  get chain() { return this._chain; }
  get tire_size() { return this._tire_size; }

  default_chain() { // <- common default
    return '11-speed';
  }
  // ...
  default_tire_size() {
    throw new Error('not implemented');
  }
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

  default_tire_size() { // <- subclass default
    return '23';
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

  default_tire_size() { // <- subclass default
    return '2.1';
  }
  // ...
}


class RecumbentBike extends Bicycle {
  default_chain() {
    return '10-speed';
  }
}

const bent = new RecumbentBike({
  size: 'L',
});
// => Error: not implemented
//      at RecumbentBike.default_tire_size ...
//      at new Bicycle ...
//      at new RecumbentBike ...
