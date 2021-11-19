require 'open-uri'
require 'nokogiri'
require 'csv'
require 'json'
require "cgi"
require_relative 'film'

class Parser
  BASE_URL = "https://kinoafisha.ua/kinoafisha/chernovcy/"

  attr_accessor :max_pages, :start_page, :items

  def initialize(start_page, max_pages)
    @max_pages  = max_pages
    @start_page = start_page
    @agent      = Mechanize.new
    @items      = []
  end


def parse_item(item)
  movieblock = item.at('div#jsc-afisha > ul > li.movie__block')
    title     = movieblock.at('.movie__title').text
    countries = movieblock.at('.countries').text
    age       = movieblock.at('span')[0].text
    point     = movieblock.at('span')[3].text
    actors    = []
    director  = nil
  movieblock.at('div.movie__details > p').each do |item|
    if item.text.match(/Режиссёр:/)
      director = item.text.split(':').last
    elsif item.text.match(/Актёры:/)
      actors = item.text.split(':').last.strip.split(', ')
  end
  Film.new(title, countries, age, point, actors, director)
end

 def parse
    @curr_page     = @agent.get(BASE_URL % @start_page)
    @items         = []
    pages_to_parse = @max_pages - @start_page + 1
    pages_to_parse.times do |curr_page_number|
      puts "Parsing page #{curr_page_number + @start_page}"
      parse_curr_page()
      puts @curr_page.uri.to_s
      next_page()
    end
    @items.compact!
    self
  end
  
def writeCsv(file_path)
column_names = showings.first.keys
s=CSV.generate do |csv|
  csv << column_names
  showings.each do |x|
    csv << x.values
  end
end
File.write(file_path, s)
self
end
end
end