# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# create manifacturers data
manifacturers_hash = {
  'ホンダ' => 'japan',
  'ヤマハ' => 'japan',
  'カワサキ' => 'japan',
  'ハーレーダビッドソン' => 'america',
  'インディアン' => 'america',
  'トライアンフ' => 'england',
  'BMW' => 'germany'
}
manifacturers = manifacturers_hash.map do |name, country|
  Manufacturer.create(name: name, country: country)
end

# create bikes data
bikes_hash = {
  'ホンダ' => 'CB250RS',
  'ヤマハ' => 'YZF-R25',
  'カワサキ' => 'ZRX1200',
  'ハーレーダビッドソン' => 'CVO FLTRXSE',
  'インディアン' => 'スプリングフィールド',
  'トライアンフ' => 'ロケット3 GT',
  'BMW' => 'M1000RR'
}
bikes_hash.each do |manufacturer_name, name|
  manufacturer = Manufacturer.find_by!(name: manufacturer_name)
  Bike.create(name: name, manufacturer_id: manufacturer.id, displacement: 400, manufactured_date: Time.current - 5.years, price: 200)
end
