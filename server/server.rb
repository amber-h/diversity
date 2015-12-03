require 'json'
require 'sinatra'
require 'rethinkdb'
include RethinkDB::Shortcuts

class Server < Sinatra::Base
  set :bind, '0.0.0.0'
  set :port, 4567

  get '/people' do
    connection = r.connect(:host => 'rethinkdb', :port => 28015)

    headers 'Access-Control-Allow-Origin' => '*'
    body r.db(ENV['DB_NAME']).table('people').run(connection).entries.to_json
  end

  post '/stats' do
    headers 'Access-Control-Allow-Origin' => '*'

    queryOptions = JSON.parse request.body.read
    puts queryOptions

    response
  end

end
