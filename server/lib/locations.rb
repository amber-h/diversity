module Locations

  ALL = { "The World" => [ "Chicago", "New York", "Dallas", "Atlanta", "San Francisco", "Toronto", "Calgary",
                  "Manchester", "London", "Hamburg", "Istanbul", "Wuhan", "Xi'an", "Sydney", "Signapore",
                  "Shanghai", "Sao Paulo", "Recipe", "Quito", "Pune", "Porto Alegre", "Perth", "Milan", "Melbourne",
                  "Kampala", "Johannesburg", "Hyderabad", "ETG US", "ETG UK", "ETG India", "Delhi", "Chennai", "Brisbane",
                  "Berlin", "Belo Horizonte", "Beijing", "Bangalore"] }

  NORTH_AMERICA = { "North America" => [ "Chicago", "New York", "Dallas", "Atlanta", "San Francisco", "Toronto", "Calgary"] }
  EUROPE = { "Europe" => [ "Manchester", "London", "Hamburg", "Berlin", "Istanbul", "Milan" ] }
  INDIA = { "India" => [ "Bangalore", "Delhi", "Chennai", "Pune"] }
  CHINA = { "China" => [ "Xi'an", "Shanghai", "Beijing" ] }
  BRAZIL = { "Brazil" => [ "Porto Alegre", "Belo Horizonte", "Recife", "Sao Paulo"] }
  AUSTRALIA = { "Australia" => [ "Perth", "Melbourne", "Brisbane", "Sydney"] }

  def self.all_location_groups
    [ALL, NORTH_AMERICA, EUROPE, INDIA, CHINA, BRAZIL, AUSTRALIA]
  end

  def self.get_locations_in_group group
    all_location_groups.each { |location_group|
      return location_group[group] if location_group.has_key? group
    }
    return ["No location groups match"]
  end

end
