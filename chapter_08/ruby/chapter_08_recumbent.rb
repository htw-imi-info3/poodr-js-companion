RECUMBENT_CONFIG =
  [['chain',        '9-speed'],
   ['tire_size',    '28'],
   ['flag',         'tall and orange']]

recumbent_bike =
  Bicycle.new(
    size: 'L',
    parts: PartsFactory.build(RECUMBENT_CONFIG))

recumbent_bike.spares
