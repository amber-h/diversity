class StatsService

  def by_gender thoughtworkers
    female_count = (filter_by_gender Array.new(thoughtworkers), "Female").count
    male_count = (filter_by_gender Array.new(thoughtworkers), "Male").count

    total = thoughtworkers.count

    male_percentage = percentage male_count, total
    female_percentage = percentage female_count, total

    { :male => {
          :count => male_count,
          :percentage => male_percentage
        },
      :female => {
          :count => female_count,
          :percentage => female_percentage
        }
    }
  end

  private

  def filter_by_gender thoughtworkers, gender
    thoughtworkers.keep_if { |thoughtworker|
        thoughtworker["gender"] == gender
    }
  end

  def percentage count, total
    ( count / total.to_f ) * 100
  end

end
