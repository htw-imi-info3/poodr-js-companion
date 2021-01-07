class Bicycle
  attr_reader :size, :parts

  def initialize(args={})
    @size       = args[:size]
    @parts      = args[:parts]
  end

  def spares
    parts.spares
  end
end
class Part
  attr_reader :name, :description, :needs_spare

  def initialize(args)
    @name         = args[:name]
    @description  = args[:description]
    @needs_spare  = args.fetch(:needs_spare, true)
  end
end

require 'forwardable'
class Parts
  extend Forwardable
  def_delegators :@parts, :size, :each
  include Enumerable

  def initialize(parts)
    @parts = parts
  end

  def spares
    select {|part| part.needs_spare}
  end
end
############## Page 176 ##############
ROAD_CONFIG =
  [['chain',        '10-speed'],
   ['tire_size',    '23'],
   ['tape_color',   'red']]


MOUNTAIN_CONFIG =
  [['chain',        '10-speed'],
   ['tire_size',    '2.1'],
   ['front_shock',  'Manitou', false],
   ['rear_shock',   'Fox']]

############## Page 177 ##############
module PartsFactory
  def self.build(config,
                 part_class  = Part,
                 parts_class = Parts)

    parts_class.new(
      config.collect {|part_config|
        part_class.new(
          name:         part_config[0],
          description:  part_config[1],
          needs_spare:  part_config.fetch(2, true))})
  end
end

road_parts = PartsFactory.build(ROAD_CONFIG)
mountain_parts = PartsFactory.build(MOUNTAIN_CONFIG)

road_bike =
  Bicycle.new(
    size: 'L',
    parts: PartsFactory.build(ROAD_CONFIG))

road_bike.spares
# -> [#<OpenStruct name="chain", etc ...

mountain_bike =
  Bicycle.new(
    size: 'L',
    parts: PartsFactory.build(MOUNTAIN_CONFIG))

mountain_bike.spares

#load 'chapter_08_v3.rb'
