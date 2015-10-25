require 'json'
require 'sinatra'
require 'rethinkdb'
include RethinkDB::Shortcuts

get '/people' do
  connection = r.connect(:host => 'rethinkdb', :port => 28015)

  headers 'Access-Control-Allow-Origin' => '*'
  body r.table('people').run(connection).entries.to_json
end
