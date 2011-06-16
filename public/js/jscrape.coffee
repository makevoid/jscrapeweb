unless window.console || console.log
  window.console = {}
  console.log = ->

class Frame
  constructor: (@elem) ->
    

class Scrapable

class Page
  constructor: (@body) ->
    $("#jscrape_cont").remove()
    #html = $("<div/>").text(@body)
    html = $(@body).find("#jq-intro").html()
    @elem = "#jsc_frame1"
    $(@elem).html(html)
    console.log(html)
    #console.log $("jscrape_cont").find("title").html()
    this.body = $("#jscrape_cont").find("title").html()
    #this.body = @body
  
class jScrape
  constructor: ->
    this.timeout = 4000
  # callback: (data) ->
  #   this.data = data  
  
  frame: (@frame_elem) ->
    frame = new Frame(@frame_elem)
    
  get: (url) ->
    url = encodeURIComponent url
    this.data = undefined
    that = this
    $.get "http://"+$.jScrape_server+"/q/"+url, (data) -> 
      that.page = new Page(data)
      that.data = data
      # that.callback data 
    this.time = new Date()
    that = this
    this.timer = setInterval( ->
      that.checkForCallback()
    , 10)
    this.data

    
  checkForCallback: ->
    time = new Date()
    # console.log("data is: "+this.data+", time is: "+(time - this.time))
    if (time - this.time) > this.timeout
      this.data = "TimeOutError"  
      clearInterval(this.timer)
    clearInterval(this.timer) unless this.data == undefined

  

$.jScrape = jScrape