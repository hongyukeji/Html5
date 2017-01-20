define(['jquery'], function ($){
    return {
        systemTime: function (str1, str2){
            return str1 === str2;
        },
        systemDate: function (){
            var oDate = new Date();
            return oDate.getFullYear();
        }
    }
});
