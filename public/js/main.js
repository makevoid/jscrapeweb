

$(function(){
  //$.jScrape_server = "localhost:3001"
  $.jScrape_server = "jscrape.it:9393"

  // frame = jScrape.frame("#jsc_frame1")
  // frame.get(url)
  
  // agent.get "http://www.youtube.com/watch?v=eXqPYte8tvc"
  //agent.get "http://mkvd.net"




  // $("#jsc_test1").click(function() {
  //   var jscrape = new $.jScrape()
  //   var url = "http://jquery.com"
  //   jscrape.get(url, function(page){
  //     var html = $(page.html).find("#jq-intro").html()
  //     $("#jsc_frame1").html(html)
  //   })    
  // })
  //   

  $("#demo2 form").submit(function() {
    var jscrape = new $.jScrape()
    var url = $(this).find("input[name=address]").val()
    var selector = $(this).find("input[name=selector]").val()
    jscrape.frame("#jsc_frame2").get(url, function(page){
      page.fetch(selector)
    })  
    return false
  })

})