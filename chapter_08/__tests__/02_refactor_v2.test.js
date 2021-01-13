const {Bicycle, Parts, Part} = require("../02_refactor_v2")


describe('all Bikes v2', () => {

    const chain = new Part({name: 'chain', description: '10-speed'})

    const road_tire = new Part({name: 'tire_size', description: '23'})

    const tape = new Part({name: 'tape_color', description: 'red'})

    const mountain_tire = new Part({name: 'tire_size', description: '2.1'})

    const rear_shock = new Part({name: 'rear_shock', description: 'Fox'})

    const front_shock = new Part({
        name: 'front_shock',
        description: 'Manitou',
        needs_spare: false})

    const flag = new Part({name: flag, description: "Flag to be seen", _needs_spare: true})

    it('has a default for needs_spare', () => {
        expect(chain._needs_spare).toBe(true)
    })

    test('RoadBike', () => {
        const road_bike =
            new Bicycle ({
                size:  'M',
                parts: Parts (chain,
                    road_tire,
                    tape)});

        expect(road_bike.parts.tire_size).toBe("23")
        expect(road_bike.parts.chain).toBe('11-speed')
        expect(road_bike.spares().length).toEqual(3)
        expect(road_bike.parts.length).toEqual(4)
        expect(road_bike.spares()).toEqual(
            {tire_size: '23', chain: '11-speed', tape_color: 'red'})
    })

    test('MountainBike', () => {
        const mountain_bike =
            new Bicycle ({
                size:  'L',
                parts: new Parts (chain,
                    mountain_tire,
                    front_shock,
                    rear_shock)})

        expect(mountain_bike.spares().length).toEqual(3)
        expect(mountain_bike.parts.length).toEqual(3)

        expect(mountain_bike.parts.tire_size).toEqual("2.1")
        expect(mountain_bike.parts.chain).toEqual("11-speed")
        expect(mountain_bike.spares()).toEqual({tire_size: '2.1', chain: '11-speed', front_shock: 'Manitou'})
    })

    test('RecumbentBike', () => {
        const bent = new Bicycle({
            size: 'M',
            parts: new Parts(flag)
        });
        expect(bent.parts.tire_size).toEqual("28")
        expect(bent.parts.chain).toEqual("10-speed")

        expect(bent.spares()).toEqual({tire_size: '28', chain: '10-speed', flag: 'tall and orange'})

    })

})



