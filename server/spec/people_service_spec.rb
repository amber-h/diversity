require 'rspec'
require_relative '../people_service'

describe 'People Service' do

  before(:each) do
    @andrew = {'name':'Andrew', 'role': 'XD'}
    @amber = {'name':'Amber', 'role': 'PM' }
    @people = [ @andrew, @amber ]
  end

  it 'should accept people' do
    PeopleService.accept(@people)
    expect(PeopleService.get_people).to eq(@people)
  end

  it 'find people by role' do
    PeopleService.accept(@people)
    expect(PeopleService.find_by_role 'XD').to eq([@andrew])
  end

end
