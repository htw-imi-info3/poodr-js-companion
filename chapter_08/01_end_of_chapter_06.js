// ...
class Bicycle {
    constructor(opts = {}) {
        this._size = opts.size;
        this._chain = opts.chain || this.default_chain();
        this._tire_size = opts.tire_size || this.default_tire_size();

        this.post_initialize(opts);
    }

    get size() { return this._size; }
    get chain() { return this._chain; }
    get tire_size() { return this._tire_size; }

    spares() {
        return Object.assign({}, {
            tire_size: this.tire_size,
            chain: this.chain,
        }, this.local_spares());
    }

    default_tire_size() {
        throw new Error('Not implemented');
    }

    // subclasses may override
    post_initialize(opts) {}

    local_spares() {
        return {};
    }

    default_chain() {
        return '11-speed';
    }
}

class RoadBike extends Bicycle {
    post_initialize(opts) {
        this._tape_color = opts.tape_color;
    }

    get tape_color() { return this._tape_color; }

    local_spares() {
        return {
            tape_color: this.tape_color,
        };
    }

    default_tire_size() {
        return '23';
    }
}

class MountainBike extends Bicycle {
    post_initialize(opts) {
        this._front_shock = opts.front_shock;
        this._rear_shock = opts.rear_shock;
    }

    get front_shock() { return this._front_shock; }
    get rear_shock() { return this._rear_shock; }

    local_spares() {
        return {
            front_shock: this.front_shock,
        };
    }

    default_tire_size() {
        return '2.1';
    }
}

class RecumbentBike extends Bicycle {
    post_initialize(opts) {
        this._flag = opts.flag;
    }

    get flag() { return this._flag; }

    local_spares() {
        return {
            flag: this.flag,
        };
    }

    default_chain() {
        return '10-speed';
    }

    default_tire_size() {
        return '28';
    }
}

module.exports = {
    RoadBike: RoadBike,
    MountainBike: MountainBike,
    RecumbentBike: RecumbentBike
}