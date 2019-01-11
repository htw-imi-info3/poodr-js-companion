class Gear {
  constructor(chainring, cog) {
    this.chainring = chainring;
    this.cog = cog;
  }

  ratio() {
    return this.chainring / this.cog;
  }
}

console.log(new Gear(52, 11).ratio());
// => 4.7272727272727275

console.log(new Gear(30, 27).ratio());
// => 1.1111111111111112
