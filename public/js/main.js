

$(function(){
  //$.jScrape_server = "localhost:3001"
  $.jScrape_server = "jscrape.it:9393"

  agent = new $.jScrape()
  // frame = jScrape.frame("#jsc_frame1")
  // frame.get(url)
  
  
  // agent.get "http://www.youtube.com/watch?v=eXqPYte8tvc"
  //agent.get "http://mkvd.net"




  $("#jsc_test1").click(function() {
    url = "http://jquery.com"
    page = agent.get(url)
    console.log("p: "+page)
    false
  })
    

})