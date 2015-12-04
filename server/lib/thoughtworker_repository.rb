require 'rethinkdb'
include RethinkDB::Shortcuts

class ThoughtWorkerRepository

  def initialize
    @connection = r.connect(:host => 'rethinkdb', :port => 28015)
    @db = r.db('dev')
  end

  def all
    @db.table('people').run(@connection).entries
  end

  def find_by_role_and_location role, location
    people = @db.table('people')
    people.filter(:role => {:name => role}).run(@connection).entries
  end


end
