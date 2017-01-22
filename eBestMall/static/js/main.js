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
});

$(function(){
    var closeAd = $('.closeAd');

    closeAd.on('click', function(){
        $(this).parent().parent().fadeOut(588);
        //$(this).parent().parent().addClass("hidden");
        //$(this).parent().parent().removeClass("hidden");
        //$(this).parent().parent().css("display","none");
    });
});
