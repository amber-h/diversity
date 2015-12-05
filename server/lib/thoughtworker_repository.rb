require 'rethinkdb'
require './lib/locations'
include RethinkDB::Shortcuts

class ThoughtWorkerRepository

  def initialize
    @connection = r.connect(:host => 'rethinkdb', :port => 28015)
    @db = r.db('dev')
  end

  def all
    @db.table('people').run(@connection).entries
  end

  def find_by_role_and_location role, location_group
    people = @db.table('people')
    locations = Locations.get_locations_in_group location_group

    return filter_for_all_roles_by people, locations if role == "PS"
    return filter_by people, locations, role
  end

  private

  def filter_for_all_roles_by people, locations
    people.filter{ |person|
      (r.expr(locations).contains(person[:homeOffice][:name]))
    }.run(@connection).entries
  end

  def filter_by people, locations, role
    people.filter{ |person|
      (person[:role][:name].eq(role)) & (r.expr(locations).contains(person[:homeOffice][:name]))
    }.run(@connection).entries
  end

end
