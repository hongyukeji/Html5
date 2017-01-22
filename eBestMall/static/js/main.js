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
        $(document).click(function(){
            sideOut();
        });
        $(contentMenu).click(function(event){
            event.stopPropagation();
        });

        btnMenu.click(function(){
            btnMenu.css({"background-color":""});
            $(this).css({"background-color":"#C40000"});
            if(contentMenu.css("right") !== "270px"){
                contentMenu.css("right","270px");
                $(this).next(altMenu).css("right","0");
            }else{
                var rightValue = $(this).next(altMenu).css("right");
                if(rightValue == "-270px"){
                    altMenu.css("right","-270px");
                    $(this).next(altMenu).css("right","0");
                }
                if(rightValue == "0px"){
                    sideOut();
                    //contentMenu.css("right","0");
                    //$(this).next(altMenu).css("right","-270px");
                    //$(this).css("background-color","");
                }
            }
        });

        // 侧边栏归位函数
        function sideOut(){
            contentMenu.css("right","0");
            btnMenu.next(altMenu).css("right","-270px");
            btnMenu.css({"background-color":""});
        }

    });
});


