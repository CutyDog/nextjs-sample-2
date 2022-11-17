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
class Manufacturer < ApplicationRecord
  has_many :bikes
end
