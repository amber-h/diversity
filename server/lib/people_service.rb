
class PeopleService

  def self.accept people
    @@people = people
  end

  def self.get_people
    @@people
  end

  def self.find_by_role role
    @@people.select { |person| person[:role].eql? role }
  end
end
