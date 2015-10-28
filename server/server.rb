require 'json'
require 'sinatra'
require 'rethinkdb'
require 'envyable'
include RethinkDB::Shortcuts
Envyable.load('./config/env.yml', "#{ENV['RACK_ENV']}")

get '/people' do
  connection = r.connect(:host => 'rethinkdb', :port => 28015)

  headers 'Access-Control-Allow-Origin' => '*'
  body r.db(ENV['DB_NAME']).table('people').run(connection).entries.to_json
end
