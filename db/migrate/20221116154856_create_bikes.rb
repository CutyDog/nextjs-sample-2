class CreateBikes < ActiveRecord::Migration[7.0]
  def change
    create_table :bikes do |t|
      t.string :name
      t.datetime :manufactured_date
      t.integer :manufacturer_id
      t.float :price
      t.integer :displacement

      t.timestamps
    end
    add_index :bikes, :name, unique: true
    add_index :bikes, :manufactured_date
  end
end
