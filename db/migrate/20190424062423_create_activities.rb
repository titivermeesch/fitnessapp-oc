class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :type
      t.integer :duration
      t.datetime :date

      t.timestamps
    end
  end
end
