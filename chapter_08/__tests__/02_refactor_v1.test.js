const {Bicycle, RoadBikeParts, MountainBikeParts, RecumbentBikeParts} = require("../02_refactor_v1")

describe('all Bikes v1', () => {
    test('RoadBike', () => {
        const parts = new RoadBikeParts({
            tape_color: 'red'})
        const road_bike = new Bicycle({
            size: 'M',
            parts: parts
        });
        expect(road_bike.parts.tire_size).toBe("23")
        expect(road_bike.parts.chain).toBe('11-speed')
        expect(road_bike.spares()).toEqual(
            {tire_size: '23', chain: '11-speed', tape_color: 'red'})
    })

    test('MountainBike', () => {
        const mountain_bike = new Bicycle({
            size: 'S',
            parts: new MountainBikeParts({
            front_shock: 'Manitou',
            rear_shock: 'Fox'
            })
        });

        expect(mountain_bike.parts.tire_size).toEqual("2.1")
        expect(mountain_bike.parts.chain).toEqual("11-speed")
        expect(mountain_bike.spares()).toEqual({tire_size: '2.1', chain: '11-speed', front_shock: 'Manitou'})
    })

    test('RecumbentBike', () => {
        const bent = new Bicycle({
            size: 'M',
            parts: new RecumbentBikeParts({
            flag: 'tall and orange'
            })
        });
        expect(bent.parts.tire_size).toEqual("28")
        expect(bent.parts.chain).toEqual("10-speed")

        expect(bent.spares()).toEqual({tire_size: '28', chain: '10-speed', flag: 'tall and orange'})

    })

})



