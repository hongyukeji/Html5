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

require(['jquery', 'system'], function($, system){
    console.log( system.scrollTry('.fixedTop') );
    console.log( system.scrollTry('.topRight') );
    //console.log( system.systemDate() );
});

$(function(){
    //var fixedTop = $('.fixedTop'),
    //    topRight = $('.topRight');

    //$(window).trigger('scroll');
    //$(window).on('scroll', function(){
    //    if($(window).scrollTop() > $(window).height()){
    //        fixedTop.fadeIn();
    //        topRight.fadeIn();
    //    }else{
    //        fixedTop.fadeOut();
    //        topRight.fadeOut();
    //    }
    //});

    //topRight.on('click', function(){
    //    $('html,body').animate({scrollTop: 0},588);
    //});
});
