require 'json'

class Film
  attr_accessor :title, :countries, :age, :point, :actors, :director
      def initialize(title, countries, age, point, actors, director)
    @title           = title
    @countries       = countries
    @age             = age
    @point           = point
    @actors          = actors
    @director        = director

  end

  def values
      [@title, @countries, @age, @point, @actors, @director]
  end
end