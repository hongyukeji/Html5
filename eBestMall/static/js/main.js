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
    system.scrollTry('.fixedTop');
    system.scrollTry('.topRight');
});

$(function(){});
