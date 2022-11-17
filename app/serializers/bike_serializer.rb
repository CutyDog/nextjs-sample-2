class BikeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :manufactured_date, :price, :displacement
  belongs_to :manufacturer
end
