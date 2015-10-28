require 'rspec'
require_relative '../people_service'

describe 'People Service' do

  before(:each) do
    @andrew = {name: 'Andrew', role: 'XD'}
    @amber = {name: 'Amber', role: 'PM' }
    @people = [ @andrew, @amber ]
  end

  it 'accepts people' do
    PeopleService.accept(@people)
    expect(PeopleService.get_people).to eq(@people)
  end

  context 'finds people by role' do
    it 'finds XDs' do
      PeopleService.accept(@people)
      expect(PeopleService.find_by_role 'XD').to eq([@andrew])
    end

    it 'finds PMs' do
      PeopleService.accept(@people)
      expect(PeopleService.find_by_role 'PM').to eq([@amber])
    end
  end

end
