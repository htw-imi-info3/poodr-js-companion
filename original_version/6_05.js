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
  
  // many other methods...
}

const bike = new Bicycle({
  size: 'M',
  tape_color: 'red',
});

console.log(bike.size);
// => M

console.log(bike.spares());
// => { chain: '11-speed', tire_size: '23', tape_color: 'red' }

