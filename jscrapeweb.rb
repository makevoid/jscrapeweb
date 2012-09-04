require 'haml'
require 'sass'
require 'sinatra/base'

path = File.expand_path "../", __FILE__
APP_PATH = path

class JScrapeWeb < Sinatra::Base
  require "#{APP_PATH}/config/env"

  configure :development do # use thin start
    set :public, "public"
    set :static, true
  end

  set :haml, { :format => :html5 }
  require 'rack-flash'
  enable :sessions
  use Rack::Flash
  set :method_override, true

  def not_found(object=nil)
    halt 404, "404 - Page Not Found"
  end

  get "/" do
    haml :index
  end

  get '/css/main.css' do
    sass :main
  end

end