class CreateProjects < ActiveRecord::Migration[8.0]
  def change
    create_table :projects do |t|
      t.text :name
      t.text :url
      t.text :description

      t.timestamps
    end
  end
end
