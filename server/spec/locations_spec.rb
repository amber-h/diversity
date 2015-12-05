require 'rspec'
require './lib/locations'

describe "Locations" do

  describe "get_locations_in_group" do
    it "gets the individual locations within a location group" do
      expected_locations = [ "Manchester", "London", "Hamburg", "Berlin", "Istanbul", "Milan" ]
      actual_locations = Locations.get_locations_in_group "Europe"

      expect(actual_locations).to eq(expected_locations)
    end

    it "returns a message when the group doesn't match an existing group" do
      expected_locations = ["No location groups match"]
      actual_locations = Locations.get_locations_in_group "No matching group"

      expect(actual_locations).to eq(expected_locations)
    end
  end

end
