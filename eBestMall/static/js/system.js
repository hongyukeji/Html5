define(['jquery'], function ($){
    return {
        scrollTry: function (className){
            var className = $(className);
            $(window).on('scroll', function(){
                if($(window).scrollTop() > $(window).height()){
                    className.fadeIn();
                }else{
                    className.fadeOut();
                }
            });
            className.on('click', function(){
                $('html,body').animate({scrollTop: 0},588);
            });
        },
        systemDate: function (){
            var oDate = new Date();
            return oDate.getFullYear();
        }
    }
});
