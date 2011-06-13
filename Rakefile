require "todo"

namespace :db do

  desc "clear sample data"
  task :clear do
    ToDo.all.each{|todo| todo.destroy}
  end

  desc "seeds sample data"
  task :seed => :clear do
    ["Task 1", "Task 2", "Task 3"].each do |entry|
      ToDo.create(:name => entry)
    end
  end

end