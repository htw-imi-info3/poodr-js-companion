# Version 2 full listing -
# with Parts including Enumerable and using Forwardable
# see http://www.ruby-doc.org/stdlib-2.0/libdoc/forwardable/rdoc/Forwardable.html
# http://ruby-doc.org/core-2.0.0/Enumerable.html

############## Page ?? ##############
# Full listing for above
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

class Part
  attr_reader :name, :description, :needs_spare

  def initialize(args)
    @name         = args[:name]
    @description  = args[:description]
    @needs_spare  = args.fetch(:needs_spare, true)
  end
end

#this duplicates #012
chain =
  Part.new(name: 'chain', description: '10-speed')

road_tire =
  Part.new(name: 'tire_size',  description: '23')

tape =
  Part.new(name: 'tape_color', description: 'red')

mountain_tire =
  Part.new(name: 'tire_size',  description: '2.1')

rear_shock =
  Part.new(name: 'rear_shock', description: 'Fox')

front_shock =
  Part.new(
    name: 'front_shock',
    description: 'Manitou',
    needs_spare: false)

############## Page 175 ##############
mountain_bike =
  Bicycle.new(
    size:  'L',
    parts: Parts.new([chain,
                      mountain_tire,
                      front_shock,
                      rear_shock]))

mountain_bike.spares.size   # -> 3
mountain_bike.parts.size    # -> 4

############## Page ??? ##############
mountain_bike.parts + road_bike.parts
# -> NoMethodError: undefined method `+'
#      for #<Parts:....>
