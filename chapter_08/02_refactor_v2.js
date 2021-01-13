// ...
class Bicycle {
    constructor(opts = {}) {
        this._size = opts.size;
        this._parts = opts.parts;
    }

    get size() { return this._size; }
    get parts() { return this._parts; }

    spares() {
        return this._parts.spares()
    }
}

class Parts extends Array{
    spares(){
        return this.filter(p => p.needs_spare)
    }
}

class Part {

    constructor(opts = {}) {

        this._name = opts.name
        this._description = opts.description
        this._needs_spare = opts.needs_spare || true
    }

    get name() { return this._name; }
    get description() { return this._description; }
    get needs_spare() { return this._needs_spare; }

    to_s(){
        return `${this._name}: ${this._description} (${this._needs_spare ? "needed" : "not needed" })`
    }

}

module.exports = {
    Bicycle: Bicycle,
    Parts: Parts,
    Part: Part
}

