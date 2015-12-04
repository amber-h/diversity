require 'json'
require 'sinatra'
require './lib/stats_service'
require './lib/thoughtworker_repository'

class Server < Sinatra::Base
  set :bind, '0.0.0.0'
  set :port, 4567

  get '/people' do
    headers 'Access-Control-Allow-Origin' => '*'
    body ThoughtWorkerRepository.new.all
  end

  post '/stats' do
    queryOptions = JSON.parse request.body.read

    headers 'Access-Control-Allow-Origin' => '*'
    thoughtworkers = ThoughtWorkerRepository.new.find_by_role_and_location queryOptions["role"], queryOptions["location"]

    diversity_stats = StatsService.new.by_gender thoughtworkers
    body diversity_stats.to_json
  end


end
