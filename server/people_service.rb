
class PeopleService

  def self.accept people
    @@people = people
  end

  def self.get_people
    @@people
  end

  def self.find_by_role role
    [{:name=>"Andrew", :role=>"XD"}]
  end
end
