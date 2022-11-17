# == Schema Information
#
# Table name: bikes
#
#  id                :integer          not null, primary key
#  displacement      :integer
#  manufactured_date :datetime
#  name              :string
#  price             :float
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  manufacturer_id   :integer
#
# Indexes
#
#  index_bikes_on_manufactured_date  (manufactured_date)
#  index_bikes_on_name               (name) UNIQUE
#
require "test_helper"

class BikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
