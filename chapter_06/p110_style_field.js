// 6_10.js
class Bicycle {
  constructor(opts = {}) {
    this._style = opts.style;
    this._size = opts.size;
    this._tape_color = opts.tape_color;
    this._front_shock = opts.front_shock;
    this._rear_shock = opts.rear_shock;
  }

  get style() { return this._style; }
  get size() { return this._size; }
  get tape_color() { return this._tape_color; }
  get front_shock() { return this._front_shock; }
  get rear_shock() { return this._rear_shock; }

  // checking 'style' starts down a slippery slope
  spares() {
    if (this.style === 'road') {
      return {
        chain: '11-speed',
        tire_size: '23', // millimeters
        tape_color: this.tape_color,
      };
    } else {
      return {
        chain: '11-speed',
        tire_size: '2.1', // inches
        front_shock: this.front_shock,
      };
    }
  }
  // ...
}

let bike;
bike = new Bicycle({
  style: 'mountain',
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox',
});

console.log(bike.spares());
// => { chain: '11-speed', tire_size: '2.1', front_shock: 'Manitou' }

bike = new Bicycle({
  style: 'road',
  size: 'M',
  tape_color: 'red',
});

console.log(bike.spares());
// => { chain: '11-speed', tire_size: '23', tape_color: 'red' }
