define(['jquery'], function ($){
    return {
        scrollTry: function (className){
            var className = $(className);
            $(window).on('scroll', function(){
                if($(window).scrollTop() > $(window).height()){
                    className.fadeIn(); //  scroll-linked 定位 BUG - 待解决 Shadow
                    //className.css("display","block");
                }else{
                    className.fadeOut();    // scroll-linked 定位 BUG - 待解决 Shadow
                    //className.css("display","none");
                }
            });

        },

        //Top返回顶部
        scrollTop: function (className){
            var className = $(className);
            className.on('click', function(){
                $('html,body').animate({scrollTop: 0},588);
            });
        },

        //关闭首页广告
        closeAd: function (className){
            var closeAd = $(className);
            closeAd.on('click', function(){
                $(this).parent().parent().fadeOut(588);
                //$(this).parent().parent().addClass("hidden");
                //$(this).parent().parent().removeClass("hidden");
                //$(this).parent().parent().css("display","none");
            });
        }

    }
});
