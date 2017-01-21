define(['jquery'], function ($){
    return {
        scrollTry: function (className){
            var className = $(className);
            $(window).on('scroll', function(){
                if($(window).scrollTop() > $(window).height()){
                    //className.fadeIn();
                    className.css("display","block");
                }else{
                    //className.fadeOut();
                    className.css("display","none");
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
