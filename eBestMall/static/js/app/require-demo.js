require.config({
    baseUrl: 'static/js', /* 默认加载路径 */
    paths: {
        jquery: '../lib/jquery-2.2.3.min.js'
    }
});

require(['../lib/jquery-2.2.3.min'], function($){});

define(['../lib/jquery-2.2.3.min'], function ($){
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
