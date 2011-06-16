(function() {
  var Frame, Page, Scrapable, jScrape;
  if (!(window.console || console.log)) {
    window.console = {};
    console.log = function() {};
  }
  Frame = (function() {
    function Frame(elem) {
      this.elem = elem;
    }
    return Frame;
  })();
  Scrapable = (function() {
    function Scrapable() {}
    return Scrapable;
  })();
  Page = (function() {
    function Page(body) {
      var html;
      this.body = body;
      $("#jscrape_cont").remove();
      html = $(this.body).find("#jq-intro").html();
      this.elem = "#jsc_frame1";
      $(this.elem).html(html);
      console.log(html);
      this.body = $("#jscrape_cont").find("title").html();
    }
    return Page;
  })();
  jScrape = (function() {
    function jScrape() {
      this.timeout = 4000;
    }
    jScrape.prototype.frame = function(frame_elem) {
      var frame;
      this.frame_elem = frame_elem;
      return frame = new Frame(this.frame_elem);
    };
    jScrape.prototype.get = function(url) {
      var that;
      url = encodeURIComponent(url);
      this.data = void 0;
      that = this;
      $.get("http://" + $.jScrape_server + "/q/" + url, function(data) {
        that.page = new Page(data);
        return that.data = data;
      });
      this.time = new Date();
      that = this;
      this.timer = setInterval(function() {
        return that.checkForCallback();
      }, 10);
      return this.data;
    };
    jScrape.prototype.checkForCallback = function() {
      var time;
      time = new Date();
      if ((time - this.time) > this.timeout) {
        this.data = "TimeOutError";
        clearInterval(this.timer);
      }
      if (this.data !== void 0) {
        return clearInterval(this.timer);
      }
    };
    return jScrape;
  })();
  $.jScrape = jScrape;
}).call(this);
