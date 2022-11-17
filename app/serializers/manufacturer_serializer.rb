class ManufacturerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :country
end
