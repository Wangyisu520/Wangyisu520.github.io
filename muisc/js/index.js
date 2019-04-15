  var root = window.player;
  var dataList = [];
  var len;
  var audio = root.aduioManager;
  var control;
  var timer;
  var duration = 0;

  function getData(url) {
      $.ajax({
          type: "GET",
          url: url,
          success: function (data) {
              console.log(data)
              dataList = data
              len = data.length;
              control = new root.controlIndex(len);
              root.render(data[0])
              audio.getAudio(data[0].audio)
              root.pro.renderAllTime(data[0].duration)
              root.playList.renderList(data)
              bindEvent()
              bindTouch()
          }
      })
  }

  function bindTouch(){
      var left = $('.pro-bottom').offset().left;
      var width =$('.pro-bottom').offset().width;
    $(".slider").on('touchstart',function(){
        root.pro.stop()
    }).on('touchmove',function(e){
        var x = e.changedTouches[0].clientX;
        var per = (x-left) / width;
        if(per >=0 && per <=1){
            root.pro.update(per)
        }
    }).on('touchend',function(e){
        var x = e.changedTouches[0].clientX;
        var per = (x-left) / width;
        
        if(per >= 0 && per <=1){
            var duration = dataList[control.index].duration;
            var curTime = per * duration;
            audio.playTo(curTime)
            $('.play').addClass("playing")
            audio.status= 'play'
            root.pro.start(per)
        }
    })
  }

  function bindEvent() {
      $('body').on('play:change',function(e,index,flag){
        audio.getAudio(dataList[index].audio)
          root.render(dataList[index])
          root.pro.renderAllTime(dataList[index].duration)
          if (audio.status == 'play' || flag) {
              audio.play();
               rotated(0)
               root.pro.start()
          }
          $('.img-box').attr("data-deg", 0)
          $(".img-box").css({
              'transform': 'rotateZ(' + 0 + 'deg)',
              'transition': "none"
          })
      })
      //切换歌曲
      $(".prev").on('click', function () {
          var i = control.prev()
        $('body').trigger("play:change",i)
        if(audio.status =='play'){
            root.pro.start(0)
        }else{
            root.pro.update(0)
        }
      })
      $(".next").on('click', function () {
          var i = control.next()
        $('body').trigger("play:change",i)
        if(audio.status =='play'){
            root.pro.start(0)
        }else{
            root.pro.update(0)
        }
      })

      $(".play").on('click', function () {
          if (audio.status == 'pause') {
              audio.play();
              var deg = $(".img-box").attr('data-deg')
              rotated(deg)
              root.pro.start()
          } else {
              clearInterval(timer)
              audio.pause();
              root.pro.stop();
          }
          $('.play').toggleClass('playing')
      })
    $('.list').on('click',function(){
        root.playList.show(control)
    })
  }

  function rotated(deg) {
      clearInterval(timer)
      deg = +deg
      timer = setInterval(function () {
          deg += 2;
          $('.img-box').attr("data-deg", deg)
          $(".img-box").css({
              'transform': 'rotateZ(' + deg + 'deg)',
              'transition': "all 1s ease-out"
          })
      }, 200)
  }

  getData('./data.json')