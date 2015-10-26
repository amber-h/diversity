class Db

  DB_NAME = 'test'

  def initialize
    @connection = r.connect(:host => 'rethinkdb', :port => 28015)
  end

  def create
    r.db_create(DB_NAME).run(@connection)
    r.db(DB_NAME).table_create('people', {:primary_key => 'employeeId'}).run(@connection)
  end

  def drop
    r.db_drop(DB_NAME).run(@connection)
  end

end
