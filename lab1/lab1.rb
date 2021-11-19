require 'open-uri'
require 'nokogiri'
require 'csv'
require 'json'
require "cgi"

url = 'https://kinoafisha.ua/kinoafisha/chernovcy/'

doc = Nokogiri::HTML(URI.open(url))

showings = doc.css('div#jsc-afisha > ul > li.movie__block').map do |movieblock|
  title     = movieblock.css('.movie__title').text
  countries = movieblock.css('.countries').text
  age       = movieblock.css('span')[0].text
  point     = movieblock.css('span')[3].text
  actors    = []
  director  = nil
  movieblock.css('div.movie__details > p').each do |item|
    if item.text.match(/Режиссёр:/)
      director = item.text.split(':').last
    elsif item.text.match(/Актёры:/)
      actors = item.text.split(':').last.strip.split(', ')
    end
  end
  {
    title:     title,
    countries: countries,
    age:       age,
    actors:    actors,
    director: director,
    point: point,
  }
end

column_names = showings.first.keys
s=CSV.generate do |csv|
  csv << column_names
  showings.each do |x|
    csv << x.values
  end
end
File.write('myfile.csv', s)

#puts showings