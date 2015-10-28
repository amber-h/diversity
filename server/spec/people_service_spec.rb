require 'rspec'
require_relative '../people_service'

describe 'People Service' do

  it 'should accept people' do
    people = [
      {'name':'Andrew'},
      {'name':'Amber'}
    ]
    PeopleService.accept(people)
    expect(PeopleService.get_people).to eq(people)
  end

end
