require 'rspec'
require 'rack/test'
require 'db'
require 'dotenv'
require_relative '../server'

describe 'Server' do
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  before(:all) do
    ENV['RACK_ENV'] = 'test'
    Dotenv.load(File.expand_path("../.env.test",  __FILE__))

    @db = Db.new
    @db.create
  end

  after(:all) do
    @db.drop
  end

  context 'empty db' do
    skip 'Fix: load proper environment variable db_name for test env' do
      it 'returns empty response' do
        get '/people'
        expect(last_response).to be_ok
        expect(last_response.body).to eq("[]")
      end
    end
  end
end
