require.config({
    baseUrl: 'static/js', // 默认加载路径
    paths: {
        jquery: 'jquery-2.2.3.min'
    }
});

require(['jquery'], function($){
    //console.log( $ ); // OK
    //$('body').css('background-color', 'red');
});

/* 全局函数 */
require(['jquery', 'system'], function($, system){
    system.scrollTry('.fixedTop');
    system.scrollTry('.topRight');
    system.scrollTop('.topRight');
    system.closeAd('.closeAd');

    $(function(){
        //首页侧边工具栏事件
        var btnMenu = $('.btnMenu');
        var contentMenu = $('.fixedRight');
        var altMenu = $('.altMenu');

        //页面被单击事件
        $(document).click(function whichButton(event)
        {
            var btnNum = event.button;
            if (btnNum==2) { console.log("鼠标右键被点击！");}
            else if(btnNum==0) {
                /*鼠标左键被点击*/
                sideOut();
            } else if (btnNum==1) {console.log("鼠标中键被点击！");} else {console.log("您点击了" + btnNum+ "号键，我不能确定它的名称。");}
        });
        $(contentMenu).click(function(event){
            event.stopPropagation();
        });

        btnMenu.click(function(){
            btnMenu.css({"background-color":""});
            $(this).css({"background-color":"#C40000"});
            if(contentMenu.css("right") !== "270px"){
                contentMenu.animate({"right":"270px"},"fast");
                $(this).next(altMenu).animate({"right":"0"},"fast");
            }else{
                var rightValue = $(this).next(altMenu).css("right");
                if(rightValue == "-270px"){
                    altMenu.css({"right":"-270px"});
                    $(this).next(altMenu).css({"right":"0"});
                }
                if(rightValue == "0px"){sideOut();}
            }
        });

        // 侧边栏归位函数
        function sideOut(){
            contentMenu.animate({"right":"0"},"fast");
            btnMenu.css({"background-color":""}).next(altMenu).animate({"right":"-270px"},"fast");
        }
    });
});


