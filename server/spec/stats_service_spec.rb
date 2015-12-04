require 'rspec'
require './lib/stats_service'

describe 'Stats Service' do

  before(:each) do
    @stats = StatsService.new
  end

  context 'stats by gender' do
    it 'returns 0 female and 100% male when there are no female' do
      thoughtworkers = [ { "gender" => "Male" } ]

      actual_stats = @stats.by_gender thoughtworkers

      expected_stats = {
        :male => {
                :count => 1,
                :percentage => 100
              },
        :female => {
                :count => 0,
                :percentage => 0
              }
          }

      expect(actual_stats).to eq(expected_stats)

    end

    it 'returns 50% male 50% female when there are 1 of each' do
      thoughtworkers = [ { "gender" => "Male" }, { "gender" => "Female" } ]

      actual_stats = @stats.by_gender thoughtworkers

      expected_stats = {
        :male => {
                :count => 1,
                :percentage => 50
              },
        :female => {
                :count => 1,
                :percentage => 50
              }
          }

      expect(actual_stats).to eq(expected_stats)
    end

  end

end
