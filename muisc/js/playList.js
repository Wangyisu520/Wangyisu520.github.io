(function($,root){
    var $body = $('body')
    var control;
    var $playList = $("<div class = 'play-list'>"+
    "<div class='play-header'>播放列表</div>" + 
    "<ul class = 'list-wrapper'></ul>" +
    "<div class='close-btn'>关闭</div>"+
"</div>")

function renderList(songList){
    var html = '';
    console.log(songList)
    for(var i = 0; i < songList.length; i++){
        html += `<li>
        <h3>${songList[i].song}
            <span>${songList[i].singer}</span>
        </h3>
    </li>`
    }
    $playList.find('ul').html(html)
    $body.append($playList)
    bindEvent()
}

function show(controlManager){
    control = controlManager;
    $playList.addClass("show")
    singSong(control.index)
}
function bindEvent(){
    $('.close-btn').on('click',function(){
        $playList.removeClass("show")
    })
    $playList.find("li").on("click",function(){
        var index = $(this).index();
        singSong(index);
        control.index = index;
        $body.trigger("play:change",[index,true]);
        $body.find(".play").addClass("playing");
        setTimeout(function(){
            $playList.removeClass("show")
        }, 200);
    })
}

function singSong(index){
    $playList.find(".sign").removeClass("sign");
    $playList.find("ul li h3").eq(index).addClass("sign");
}

root.playList = {
    renderList: renderList,
    show: show
}

})(window.Zepto,window.player || (window.player = {}))