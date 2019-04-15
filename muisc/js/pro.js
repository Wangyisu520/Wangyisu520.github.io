(function($,root){

    var duration ;
    var frameId;
    var lastPer=0;
    var startTime;

    function renderAllTime(time){
        duration = time
        time = formatTime(time)
        $(".all-time").html(time)
    }

    function formatTime(t){
        t = Math.round(t);
        var m = Math.floor(t / 60);
        var s = t - m *60;
        if(m < 10){
            m = '0' + m
        }
        if(s < 10){
            s = '0' + s
        }
        return m +':'+s;
    }

    function start(p){
        lastPer = p === undefined? lastPer : p;
     startTime = new Date().getTime();

        function frame(){
            var curTime = new Date().getTime();
            var pre = lastPer +(curTime - startTime) /(duration *1000);
            update(pre)
            frameId = requestAnimationFrame(frame)
        }
        frame()
    }
    function stop(){
        var stopTime = new Date().getTime()
        lastPer = lastPer + (stopTime - startTime) /(duration *1000);
        cancelAnimationFrame(frameId)
    }

    function update(e){
        var time = e * duration;
        time = formatTime(time)
        $('.cur-time').html(time)
        var perX = (e -1) * 100 +'%';
        $(".pro-top").css({
            transform:'translateX('+perX+')'
        })
    }

    root.pro = {
        renderAllTime:renderAllTime,
        start: start,
        stop: stop,
        update: update
    }

})(window.Zepto,window.player || (window.player ={}))