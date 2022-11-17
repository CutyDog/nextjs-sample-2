# == Schema Information
#
# Table name: manufacturers
#
#  id         :integer          not null, primary key
#  country    :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_manufacturers_on_name  (name) UNIQUE
#
require "test_helper"

class ManufacturerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
