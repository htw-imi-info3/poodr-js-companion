const {RoadBike, MountainBike, RecumbentBike} = require("../01_end_of_chapter_06")

describe('all Bikes', () => {
    test('RoadBike', () => {
        const road_bike = new RoadBike({
            size: 'M',
            tape_color: 'red',
        });
        expect(road_bike.tire_size).toBe("23")
        expect(road_bike.chain).toBe('11-speed')
        expect(road_bike.spares()).toEqual(
            {tire_size: '23', chain: '11-speed', tape_color: 'red'})
    })

    test('MountainBike', () => {
        const mountain_bike = new MountainBike({
            size: 'S',
            front_shock: 'Manitou',
            rear_shock: 'Fox',
        });

        expect(mountain_bike.tire_size).toEqual("2.1")
        expect(mountain_bike.chain).toEqual("11-speed")
        expect(mountain_bike.spares()).toEqual({tire_size: '2.1', chain: '11-speed', front_shock: 'Manitou'})
    })

    test('RecumbentBike', () => {
        const bent = new RecumbentBike({
            size: 'M',
            flag: 'tall and orange',
        });
        expect(bent.tire_size).toEqual("28")
        expect(bent.chain).toEqual("10-speed")

        expect(bent.spares()).toEqual({tire_size: '28', chain: '10-speed', flag: 'tall and orange'})

    })

})



