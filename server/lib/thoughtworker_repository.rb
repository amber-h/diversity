require 'rethinkdb'
include RethinkDB::Shortcuts

class ThoughtWorkerRepository

  def all
    connection = r.connect(:host => 'rethinkdb', :port => 28015)
    r.db('dev').table('people').run(connection).entries.to_json
  end

  def find_by_role_and_location role, location
    connection = r.connect(:host => 'rethinkdb', :port => 28015)
    people = r.db('dev').table('people')
    people.filter(:role => {:name => role}).run(connection).entries.to_json
  end


end
