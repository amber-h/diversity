require './server'

set :db_name, 'dev'

run Sinatra::Application
