$(function () {
    $(".nav-btn").click(function () {
        $(".nav-container").stop().slideToggle(200);
        $(".nav-btn").toggleClass("close");

    });
    $(".gnav li a").click(function () {
        $(".nav-container").fadeOut(100);
        $(".nav-btn").toggleClass("close");
    });
    $(".work-container a").click(function () {
        //    bodyの一番下に#bgと#photoを追加
        $("body").append("<div id='bg'></div>");
        $("body").append("<div id='photo'></div>");

        //        #bgと#photoを一旦非表示にする。
        $("#bg").hide();
        $("#photo").hide();

        $("#photo").html("<img>");
        //        #photo　img要素のsrc属性にクリックした自分自身の
        //        href属性の値を指定
        $("#photo img").attr("src",$(this).attr("href"));

        $("#bg").fadeIn();
        $("#photo").fadeIn();

        $("#bg").click(function (){
            //        #bgと#photoを非表示にする。
            //            その後に#bgと#photoを削除する。
            $(this).fadeOut(function(){
                $(this).remove();
            });

        $("#photo").fadeOut(500,function(){
            $(this).remove();
        });
        });
        return false;
    });
});
