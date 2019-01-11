class Gear {
  constructor(chainring, cog, rim, tire) {
    this.chainring = chainring;
    this.cog = cog;
    this.rim = rim;
    this.tire = tire;
  }

  ratio() {
    return this.chainring / this.cog;
  }

  gearInches() {
    return this.ratio() * (this.rim + (this.tire * 2));
  }
}

console.log(new Gear(52, 11, 26, 1.5).gearInches());
// => 137.0909090909091

console.log(new Gear(52, 11, 24, 1.25).gearInches());
// => 125.27272727272728

console.log(new Gear(52, 11).ratio()); // this does work!
// => 4.7272727272727275
