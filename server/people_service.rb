
class PeopleService

  def self.accept people
    @@people = people
  end

  def self.get_people
    @@people
  end
end
