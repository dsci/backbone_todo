require "load_paths"
require "sinatra"
require "mongo_mapper"
require "json"
# setup bundler dependencies
begin
  # Set up load paths for all bundled gems
  #ENV["BUNDLE_GEMFILE"] = File.expand_path("../../Gemfile", __FILE__)
  Bundler.setup
rescue Bundler::GemNotFound
  raise RuntimeError, "Bundler couldn't find some gems." +
    "Did you run `bundle install`?"
end

class ToDo
  
  include MongoMapper::Document
  
  connection Mongo::Connection.new('localhost')
  set_database_name 'todo'
  
  key :name, String
  key :done, Boolean
  
  validates :name, :presence => true
  
end

get "/" do
  erb :index
end

post "/todos" do
  attrs = JSON.parse(request.body.read)
  created = ToDo.create(attrs)
  p created
end

get "/todos" do
  content_type :json
  @todos = ToDo.all
  @todos.to_json
end

get "/todos/:id" do
  
end